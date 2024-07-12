import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainHomeReducer from "../reducers/mainHomeReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  mainHomeReducer: mainHomeReducer,
  searchAlbum: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
