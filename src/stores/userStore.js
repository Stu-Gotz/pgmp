import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    username: null,
    isLogedIn: false,
    role: null,
    profileData: null,
    id: null,
  }),
  actions: {
    setUserData(userData) {
      this.username = userData.username;
      this.isLoggedIn = true;
      this.id = userData.userId;
      this.role = userData.role;
      this.profileData = userData.profile;
      console.log(this.$state);
    },
    logout() {
      this.$reset;
    },
  },
  getters: {
    getUsername(state) {
      return {
        username: state.username,
      };
    },
    getUserRole(state) {
      return {
        userRole: state.username,
      };
    },
    getUserProfileData(state) {
      return {
        userProfileData: state.profileData,
      };
    },
  },
});
