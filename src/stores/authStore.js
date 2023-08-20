import { defineStore } from "pinia";
import { useUserStore } from "./userStore";

const userStore = useUserStore();

const baseUrl = "http://127.0.0.1:5500/apiv1";
export const useAuthStore = defineStore("authStore", {
  state: () => ({
    token: null,
  }),
  actions: {
    async loginUser(loginForm) {
      console.log(loginForm);
      try {
        const headers = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginForm),
        };
        console.log(headers);
        const res = await fetch(`${baseUrl}/login`, headers);
        console.log(res);
        if (res.status === 200) {
          const data = await res.json();
          this.token = data.token;
          console.log(data);
          //login user after registration, saves user clicks
          userStore.setUserData({username: data.username, role: data.role, profile: data.userProfile})
          return true;
        } else {
          console.log("Unable to login.");
        }
      } catch (err) {
        
        console.log(err.message);
        return false;
      }
    },
    async registerUser(registerForm) {
      try {
        const headers = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerForm),
        };
        const res = await fetch(`${baseUrl}/register`, headers);
        console.log(res)
        if (res.status === 201) {
          console.log("Successful registration");
          
          const data = await res.json();
          console.log(data)

          //login after registering
          this.loginUser({username: registerForm.username, password: registerForm.password});
          return true;
        } else {
          console.log("Unable to register user");
        }
      } catch (err) {
        
        console.log(err.message);
        return false;
      }
    },
  },
});
