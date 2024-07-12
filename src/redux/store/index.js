import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainHomeReducer from "../reducers/mainHomeReducer";
import searchReducer from "../reducers/searchReducer";
import favouritesReducer from "../reducers/favouritesReducer";

const rootReducer = combineReducers({
  mainHomeReducer: mainHomeReducer,
  searchAlbum: searchReducer,
  favourites: favouritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
