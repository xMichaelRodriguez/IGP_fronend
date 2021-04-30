import { types } from "../types/types";

export const errorReducer = (state = {}, action) => {
  switch (action.type) {
    case types.setError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.removeError:
      return {
        ...state,
        msgError: "",
      };

    default:
      return state;
  }
};
