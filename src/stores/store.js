import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    team: ""
  }),
  getters: {
    getTeam: (state) => {
      return state.team;
    }
  },
  actions: {
    updateTeam (team) {
      this.team = team
    },
    clearTeam ({ commit }) {
      this.team = ""
    }
    // createDex ({ commit }, newDex) {
    //   commit('createDex', newDex)
    // }
  }

})
