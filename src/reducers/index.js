import { combineReducers } from "redux";
import scores from "./scores";
import locale from "./locale";

export default combineReducers({
  scores,
  locale,
  uiSchema: (state = {}) => state,
});
