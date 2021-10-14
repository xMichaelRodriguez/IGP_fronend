import { types } from '../types/types'
const INITIAL_STATE = {
  commics: [],
  totalDocs: 0,
  totalPage: 0,
  prevPage: null,
  nextPage: null,
  activeCommic: null,
}

export const commicsReducers = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case types.commicLoaded:
      return {
        ...state,
        commics: action.payload.commics,
        totalDocs: action.payload.total_docs,
        totalPage: action.payload.total_page,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
      }
    case types.commicAddNew:
      return {
        ...state,
        commics: [...state.commics, action.payload],
      }

    case types.commicDeleted:
      return {
        ...state,
        commics: state.commics.map(
          (commic) => commic.id !== state.activeCommic.id
        ),
      }

    case types.commicSetActive:
      return {
        ...state,
        activeCommic: action.payload.commics,
      }
    case types.commicClearActive:
      return {
        ...state,
        activeCommic: null,
      }

    default:
      return state
  }
}
