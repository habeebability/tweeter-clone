import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: null,
      token: null,
    };
  },
  actions: {
    setToken(newToken) {
      this.token = newToken;
    },
    setUser(newUser) {
      this.user = newUser;
    },

    async login({ username, password }) {
      try {
        // data can be destructured from the response or not depending on the response
        const data = await $fetch(`/api/auth/login`, {
          method: "POST",
          body: {
            username,
            password,
          },
        });

        // set the token and user
        this.setToken(data.access_token);
        this.setUser(data.user);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

// export default () => {
//   const useAuthUser = () => useState("auth_user");
//   const useAuthToken = () => useState("auth_token");

//   const setToken = (newToken) => {
//     const authToken = useAuthToken();
//     authToken.value = newToken;

//     console.log(authToken.value);
//   };

//   const setUser = (newUser) => {
//     const authUser = useAuthToken();
//     authUser.value = newUser;

//     console.log(authUser.value);
//   };

//   };

//   const refreshToken = async () => {
//     try {
//       const response = await $fetch("/api/auth/refresh");

//       setToken(response.access_token);
//     } catch (error) {
//       console.log(error);
//     } finally {
//     }
//   };

//   return {
//     login,
//     useAuthUser,
//   };
// };
