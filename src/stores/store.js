import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import Pokedex from 'pokedex-promise-v2';
// const options = {
//   protocol: 'https',
//   hostName: 'localhost:443',
//   versionPath: '/api/v2/',
//   cacheLimit: 100 * 1000, // 100s
//   timeout: 5 * 1000 // 5s
// }

export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    team: "",
    P: new Pokedex()
  }),
  getters: {
    getTeam: () => {
      return this.team;
    }
  },
  actions: {
    updateTeam (team) {
      this.team = team
    },
    clearTeam () {
      this.team = ""
    }
    // createDex ({ commit }, newDex) {
    //   commit('createDex', newDex)
    // }
  }

})
