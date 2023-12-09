export const SET_USER = "SET_USER";
export const REGISTER = "REGISTER";
interface SetUserAction {
  type: typeof SET_USER;
  payload: any;
}
interface RegisterAction {
  type: typeof REGISTER;
  payload: { user: { email: string; password: string } };
}

export type UserActionTypes = SetUserAction | RegisterAction;
