import { USER_ADD_DETAILS } from "./userConstant";
const initialState = {
  userDetails: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ADD_DETAILS:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

export default userReducer;
