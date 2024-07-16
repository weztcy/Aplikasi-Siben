import { combineReducers } from "redux";
import disasterReducer from "./disasterReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  disaster: disasterReducer,
  weather: weatherReducer,
  // tambahkan reducer lain jika ada
});

export default rootReducer;