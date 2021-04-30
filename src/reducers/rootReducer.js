import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import { storiesReducer } from "./storiesReducer";
export const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  story: storiesReducer,
});
