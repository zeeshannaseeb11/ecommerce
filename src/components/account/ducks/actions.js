import { LOGGEDIN_USER } from "./actionType";

export const LoggedIn_user = (email) => {
  return {
    type: LOGGEDIN_USER,
    payload: email,
  };
};
