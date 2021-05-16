import { types } from "../types/types";

const initialState = {
  noticies: [],
  activeNotice: null,
};

export const noticiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.noticeSetActive:
      return {
        ...state,
        activeNotice: action.payload,
      };

    // case types.noticeactivenoticeAddNew:
    //   return {
    //     ...state,
    //     noticeactivenotices: [...state.noticeactivenotices, action.payload],
    //   };

    case types.noticeClearActive:
      return {
        ...state,
        activeNotice: null,
      };

    case types.noticeUpdated:
      return {
        ...state,
        noticies: state.noticies.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.noticeDeleted:
      return {
        ...state,
        noticies: state.noticies.filter((e) => e.id !== state.activeNotice.id),
        activeNotice: null,
      };

    case types.noticeLoaded:
      return {
        ...state,
        noticies: [...action.payload],
      };

    // case types.noticeactivenoticeLogout:
    //   return {
    //     ...initialState,
    //   };
    default:
      return state;
  }
};
