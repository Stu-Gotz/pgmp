import { defineStore } from "pinia";
import { useUserStore } from "./userStore";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: null,
  }),
  actions: {
    async loginUser(formData) {
        console.log(formData)
      try {
        const headers = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
          console.log(headers)
        const res = await fetch("http://127.0.0.1:5500/apiv1/login", headers);
        console.log(res)
        if (res.status === 200) {
          const data = await res.json();
        //   return true
          this.token = data.token;
          console.log(data)
        //   useUserStore.
          return true
        } else {
          console.log("Unable to login.");
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
