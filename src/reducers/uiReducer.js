import { types } from '../types/types';

const initialState = {
  ChatOpen: false,
  sidebarOpen: false,
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
    case types.uiOpenSide:
      return {
        ...state,
        sidebarOpen: true,
      };

    case types.uiCloseSide:
      return {
        ...state,
        sidebarOpen: false,
      };

    default:
      return state;
  }
};
