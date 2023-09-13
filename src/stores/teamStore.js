import { defineStore } from 'pinia'

export const useTeamStore = defineStore('teamStore', {
  state: () => ({
    team: null,
  }),
  getters: {
    getTeam: (state) => {
      return state.team;
    }
  },
  actions: {
    updateTeam (team) {
      this.team = team
    }
  }
})
