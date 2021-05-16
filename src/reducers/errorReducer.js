import { types } from "../types/types";

const initialState = {
  msgError: "",
};
export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setError:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msgError: "",
      };

    default:
      return state;
  }
};
