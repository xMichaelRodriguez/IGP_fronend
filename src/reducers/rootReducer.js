import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { commicsReducers } from './commicsReducers';
import { errorReducer } from './errorReducer';
import { noticiesReducer } from './noticiesReducer';
import { orgReducer } from './orgReducer';
import { storiesReducer } from './storiesReducer';
import { uiReducer } from './uiReducer';
export const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  story: storiesReducer,
  UI: uiReducer,
  notice: noticiesReducer,
  org: orgReducer,
  commic: commicsReducers,
});
