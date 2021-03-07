import { createStore } from "redux";
import rootReducer from "./reducers";

const enhancer =
  global.window &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__ &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(prelodedState = {}) {
  return createStore(rootReducer, prelodedState, enhancer);
}
