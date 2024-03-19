import { defineStore } from 'pinia'
import { Koffing } from 'koffing'
import Pokedex from 'pokedex-promise-v2'


export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    team: null,
    P : new Pokedex(),
  }),
  getters: {
    getTeam: (state) => {
      return state.team;
    }
  },
  actions: {
 
    async parseInput(teamInput) {

      const that = this; //to pass the `this` variable around
      function lowerCaseKeys(obj) {

        Object.keys(obj).forEach(k => {
          if (typeof obj[k] == 'string') {
            obj[k] = obj[k].toLowerCase();
          }
          else if (typeof obj[k] == 'object') {
            obj[k] = lowerCaseKeys(obj[k])
          }
        });
        return obj;
      };

      async function mapMoves(movesArray, that){
        console.log(movesArray)
        const moveObject = await that.P.getMoveByName(movesArray.map(i => i.replace(' ','-')))
        .then((response) =>{
          let moves = []
          for (var i in response){
            var move = new Object();
            move[response[i].name] = {
              name: response[i].name, 
              type: response[i].type.name,
              priority: response[i].priority,
              power: response[i].power,
              genre: response[i].damage_class.name
            };
            moves.push(move);
          };
          return moves;
        });
        return moveObject;
      };

      const parsedTeam = Koffing.parse(teamInput);
      const members = parsedTeam.teams[0].pokemon

      const pokemon = members.map(function(el) {
        const formatted = lowerCaseKeys(el)
        return formatted
      });

      const tasks = pokemon.map(mon => mon.name) 
      const res = await this.P.getPokemonByName(tasks)

      
      pokemon.forEach(async (el)=> {
        el['moves'] = await mapMoves(el['moves'], that);
        console.log(el)
      });

      //extracting fields of interest from the things I want from the res variable
      for (var i = 0; i < pokemon.length; i++){
        const resMatch = res.filter((obj) => obj['name'] === pokemon[i].name)[0];
        pokemon[i]['type'] = resMatch['types'].map((obj) => obj['type']['name']);
        pokemon[i]['dex']  = resMatch['id'];
        pokemon[i]['spriteUrl'] = resMatch['sprites']['front_default'];
        pokemon[i]['itemUrl'] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${pokemon[i].item.replace(' ', '-')}.png`;
      }

      console.log(res)
      console.log(pokemon)
      return pokemon
    },
    updateTeam(team) {
      this.team = team
    }
  }
})
