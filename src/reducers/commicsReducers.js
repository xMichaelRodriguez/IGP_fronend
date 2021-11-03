import types from '../types/types';

const INITIAL_STATE = {
  commics: [],
  totalDocs: 0,
  totalPages: 0,
  prevPage: null,
  nextPage: null,
  activeCommic: null,
};

const commicsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.commicLoaded:
      return {
        ...state,
        commics: action.payload.commicsFound,
        totalDocs: action.payload.totalDocs,
        totalPages: action.payload.totalPage,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
      };
    case types.commicAddNew:
      return {
        ...state,
        commics: [...state.commics, action.payload],
      };

    case types.commicDeleted:
      return {
        ...state,
        commics: state.commics.filter((commic) => commic.id !== action.payload),
      };

    case types.commicSetActive:
      return {
        ...state,
        activeCommic: action.payload.commics,
      };
    case types.commicClearActive:
      return {
        ...state,
        activeCommic: null,
      };

    default:
      return state;
  }
};
export default commicsReducers;
