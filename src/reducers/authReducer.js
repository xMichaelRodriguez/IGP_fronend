import types from '../types/types';

const initialState = {
  checking: true,
  // name: null,
  // uid: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };

    case types.authFinishChecking:
      return {
        ...state,
        checking: false,
      };

    case types.authLogout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
export default authReducer;
