import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { categoryReducer } from './categoryReducer';
import { commicsReducers } from './commicsReducers';
import { errorReducer } from './errorReducer';
import { homeworkReducer } from './homeWorksReducer';
import { noticiesReducer } from './noticiesReducer';
import { orgReducer } from './orgReducer';
import { storiesReducer } from './storiesReducer';
import { uiReducer } from './uiReducer';
import { userForumReducer } from './userForum';
export const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  story: storiesReducer,
  UI: uiReducer,
  notice: noticiesReducer,
  org: orgReducer,
  commic: commicsReducers,
  category: categoryReducer,
  homeWorks: homeworkReducer,
  userForum: userForumReducer
});
