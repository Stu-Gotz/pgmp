import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import Pokedex from 'pokedex-promise-v2';
class Team {
  
}

export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    team: "",
  }),
  getters: {
    getTeam: () => {
      return this.team;
    }
  },
  actions: {
    updateTeam (team) {
      this.team = team
    }
    // createDex ({ commit }, newDex) {
    //   commit('createDex', newDex)
    // }
  }

})
