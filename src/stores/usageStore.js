import { defineStore } from 'pinia'


export const useStatStore = defineStore('statStore', {
  state: () => ({
    current: null,
    previous:null,
    tma: null,
    apiUrl: "http://127.0.0.1:5500/apiv1"
  }),
  actions: {
    async setCurrent(tier) {
      const currentUrl = `${this.apiUrl}/current/${tier}`;
      console.log(currentUrl)
      try {
        const res = await fetch(currentUrl);
        const current = await res.json();
        this.current = current.data
        console.log(this.current)
      } catch (err) {
        console.log(err.message)
      }
    },
    async setPrevious(tier) {
      const previousUrl = `${this.apiUrl}/previous/${tier}`;
      console.log(previousUrl)
      try {
        const res = await fetch(previousUrl);
        const previous = await res.json();
        this.previous = previous.data
        console.log(this.previous)
      } catch (err) {
        console.log(err.message)
      }
    },
    async setOlder(tier) {
      const olderUrl = `${this.apiUrl}/older/${tier}`;
      console.log(olderUrl)
      try {
        const res = await fetch(olderUrl);
        const older = await res.json();
        this.tma = older.data;
        console.log(this.tma)
      } catch (err) {
        console.log(err.message)
      }
    }
  },
  getters: {
    getCurrent(state) {
      return state.current;
    },
    getPrevious(state) {
      return state.previous;
    },
    getTma(state) {
      return state.tma;
    }
  }
})
