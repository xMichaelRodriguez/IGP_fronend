import types from '../types/types';

const initialState = {
  organizaciones: [],
};

const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.orgLoaded:
      return {
        ...state,
        organizaciones: [...action.payload.organizations],
      };

    default:
      return state;
  }
};
export default orgReducer;
