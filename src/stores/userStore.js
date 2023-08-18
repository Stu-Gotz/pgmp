import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {

    state: () => ({
        username: "",
        isLogedIn: false,
        mongoId: null,
        role: null,
        profileData: null
    }),
    actions:{
        setUserData(userData){
            //userId is a MongoID
        }
    },
    getters: {
         getUser(state){
            return {
                username: this.username,
                savedTeams: this.savedTeams,

            }

         }
    }

}) 