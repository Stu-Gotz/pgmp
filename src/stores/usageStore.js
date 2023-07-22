import { defineStore } from 'pinia'


export const useStatStore = defineStore('statStore', {
  state: () => ({
    current: "",
    previous:"",
    tma: "",
    apiUrl: "http://127.0.0.1:5500/apiv1"
  }),
  actions: {
    async setCurrent(tier) {
      const currentUrl = `${this.apiUrl}/current/${tier}`;
      console.log(currentUrl)
      try {
        const res = await fetch(currentUrl);
        this.current = await res.json();
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
        this.previous = await res.json();
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
        this.tma = await res.json();
        console.log(this.tma)
      } catch (err) {
        console.log(err.message)
      }
    }
  },
  getters: {
    getCurrent(state) {
      return state.current;
    }
  }
})
