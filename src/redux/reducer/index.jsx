import { combineReducers } from "redux";
import testReducer from "./test_reducer";
const reducers = combineReducers({
  test: testReducer,
});

export default reducers;
