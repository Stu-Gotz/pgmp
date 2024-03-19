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

      const that = this;
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
      }

      async function mapMoves(movesArray, that){
        console.log(movesArray)
        const moveObjects = await that.P.getMoveByName(movesArray.map(i => i.replace(' ','-')));
  
        console.log(moveObjects)
      }

      const parsedTeam = Koffing.parse(teamInput);
      const members = parsedTeam.teams[0].pokemon
      const formattedMembers = members.map(function(el) {
        const formatted = lowerCaseKeys(el)
        return formatted
      });
      console.log(formattedMembers)
      const tasks = formattedMembers.map(pokemon => pokemon.name.toLowerCase()) 
      let pokemon = await this.P.getPokemonByName(tasks)

      formattedMembers.forEach((el) => {
        mapMoves(el['moves'], that)
      })


      console.log(pokemon)
    },

    updateTeam(team) {
      this.team = team
    }
  }
})
