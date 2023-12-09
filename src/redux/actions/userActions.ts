import { UserActionTypes, SET_USER, REGISTER } from "./userActionTypes";

export const setUser = (token: string | null) => {
  const user = {
    token,
  };
  return {
    type: SET_USER,
    payload: { user },
  };
};
export const registerUser = (user: {
  email: string;
  password: string;
}): UserActionTypes => {
  return {
    type: REGISTER,
    payload: { user },
  };
};
