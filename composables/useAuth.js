export default () => {
  const useAuthUser = () => useState("auth_user");
  const useAuthToken = () => useState("auth_token");

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;

    console.log(authToken.value);
  };

  const setUser = (newUser) => {
    const authUser = useAuthToken();
    authUser.value = newUser;

    console.log(authUser.value);
  };

  //   const login = async ({ username, password }) => {
  //     try {
  //       // data can be destructured from the response or not depending on the response
  //       const data = await $fetch(`/api/auth/login`, {
  //         method: "POST",
  //         body: {
  //           username,
  //           password,
  //         },
  //       });

  //       // set the token and user
  //       setToken(data.access_token);
  //       setUser(data.user);

  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  // const login = ({ username, password }) => {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       const data = await $fetch("/api/auth/login", {
  //         method: "POST",
  //         body: {
  //           username,
  //           password,
  //         },
  //       });

  //       setToken(data.access_token);
  //       setUser(data.user);

  //       resolve(true);
  //     } catch (error) {
  //       reject(error);
  //     }
  //   });
  // };

  const refreshToken = async () => {
    try {
      const response = await $fetch("/api/auth/refresh");

      setToken(response.access_token);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  //   const initAuth = async () => {
  //     try {
  //       await refreshToken();
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //     }
  //   };

  return {
    // login,
    useAuthUser,
  };
};
