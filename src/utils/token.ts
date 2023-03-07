type Ttoken = {
    access_token: string;
    token_type: string;
    remember_token: string;
   };

export const setToken = (token: Ttoken): void => {
    localStorage.setItem("token", JSON.stringify(token));
  };
  
 export const getToken = (): string => {
    let token: Ttoken = null as unknown as Ttoken;
    try {
      token = JSON.parse(localStorage.getItem("token") || "");
    } catch (error) {
      token = null as unknown as Ttoken;
    }
    return token ? `${token.access_token}` : "";
  };