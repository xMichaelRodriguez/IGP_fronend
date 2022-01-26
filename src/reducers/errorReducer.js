import types from '../types/types';

const initialState = {
  msgError: '',
};
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setError:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.removeError:
      return {
        ...state,
        msgError: '',
      };

    default:
      return state;
  }
};
export default errorReducer;
