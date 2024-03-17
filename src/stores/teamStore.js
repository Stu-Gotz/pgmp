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
      
      const parsedTeam = Koffing.parse(teamInput);
      const members = parsedTeam.teams[0].pokemon
      const tasks = members.map(pokemon => pokemon.name.toLowerCase()) 
      const pokemon = await this.P.getPokemonByName(tasks)
      console.log(pokemon)
    },

    updateTeam(team) {
      this.team = team
    }
  }
})
