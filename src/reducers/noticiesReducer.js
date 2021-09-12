import { types } from '../types/types';

const initialState = {
  noticies: {
    noticeArr: [],
    total_docs: null,
    total_page: null,
  },
  activeNotice: null,
};

export const noticiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.noticeSetActive:
      return {
        ...state,
        activeNotice: action.payload,
      };

    case types.noticeClearActive:
      return {
        ...state,
        activeNotice: null,
      };

    case types.noticeUpdated:
      return {
        ...state,
        noticies: {
          noticeArr: state.noticies.noticeArr.map((e) =>
            e.id === action.payload.id ? action.payload : e
          ),
        },
      };

    case types.noticeDeleted:
      return {
        ...state,
        noticies: {
          noticeArr: state.noticies.noticeArr.filter(
            (e) => e.id !== action.payload
          ),
        },
        activeNotice: null,
      };

    case types.noticeLoaded:
      return {
        ...state,
        noticies: {
          noticeArr: [...action.payload.noticies],
          total_docs: action.payload.total_docs,
          total_page: action.payload.total_page,
        },
      };

    // case types.noticeactivenoticeLogout:
    //   return {
    //     ...initialState,
    //   };
    default:
      return state;
  }
};
