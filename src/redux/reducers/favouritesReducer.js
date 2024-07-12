const initialState = {
  likedSongs: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        likedSongs: state.likedSongs.concat(action.payload),
      };
    case "REMOVE_FAV":
      return {
        ...state,
        likedSongs: state.likedSongs.filter(likedSong => likedSong.id !== action.payload),
      };
    default:
      return state;
  }
};
export default favouritesReducer;
