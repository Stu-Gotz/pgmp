import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    username: null,
    isLogedIn: false,
    role: null,
    profileData: null,
  }),
  actions: {
    setUserData(userData) {
      this.username = userData.username;
      this.isLoggedIn = true;
      (this.role = userData.role), (this.profileData = userData.profile);
      console.log(this.$state);
    },
    logout() {
      this.$reset;
    },
  },
  getters: {
    getUsername(state) {
      return {
        username: this.username,
      };
    },
    getUserRole(state) {
      return {
        userRole: this.username,
      };
    },
    getUserProfileData(state) {
      return {
        userProfileData: this.profileData,
      };
    },
  },
});
