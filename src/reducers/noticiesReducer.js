import types from '../types/types';

const initialState = {
  noticies: [],
  totalDocs: null,
  totalPages: null,
  nextPage: null,
  prevPage: null,

  activeNotice: null,
};

const noticiesReducer = (state = initialState, action) => {
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

        noticies: state.noticies.map((e) =>
          e.id === action.payload.id ? action.payload : e,
        ),
      };

    case types.noticeDeleted:
      return {
        ...state,
        noticies: state.noticies.filter((e) => e.id !== action.payload),
        activeNotice: null,
      };

    case types.noticeLoaded:
      return {
        ...state,
        noticies: [...action.payload.noticies],
        totalDocs: action.payload.totalDocs,
        totalPages: action.payload.totalPages,
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
      };

    // case types.noticeactivenoticeLogout:
    //   return {
    //     ...initialState,
    //   };
    default:
      return state;
  }
};
export default noticiesReducer;
