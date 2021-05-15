import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import { storiesReducer } from "./storiesReducer";
import { uiReducer } from "./uiReducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  story: storiesReducer,
  UI: uiReducer,
});
