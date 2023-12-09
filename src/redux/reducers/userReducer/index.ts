import {
  UserActionTypes,
  SET_USER,
  REGISTER,
} from "../../actions/userActionTypes";

const initialState: any = null;

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case REGISTER:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default userReducer;
