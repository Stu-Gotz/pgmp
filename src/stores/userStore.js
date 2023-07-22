import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {

    state: () => ({
        username: "John Doe",
        isLogedIn: true,
        savedTeams: null,
    })

}) 