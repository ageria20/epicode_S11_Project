import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainHomeReducer from "../reducers/mainHomeReducer";

const rootReducer = combineReducers({
  mainHomeReducer: mainHomeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
