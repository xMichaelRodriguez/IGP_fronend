import { types } from "../types/types";

const initialState = {
  ChatOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenChat:
      return {
        ...state,
        ChatOpen: true,
      };

    case types.uiCloseChat:
      return {
        ...state,
        ChatOpen: false,
      };

    default:
      return state;
  }
};
