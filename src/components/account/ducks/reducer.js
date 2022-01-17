import { LOGGEDIN_USER } from "./actionType";

const initialValues = {};

export default (state = initialValues, action) => {
  switch (action.type) {
    case LOGGEDIN_USER:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
