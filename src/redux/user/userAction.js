import { USER_ADD_DETAILS } from "./userConstant";

export const ADD_DETAILS = (data) => {
  return {
    type: USER_ADD_DETAILS,
    payload: data,
  };
};
