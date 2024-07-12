const initialState = {
  rockClassic: [],
  popCulture: [],
  hipHop: [],
  selected: null,
  likedSongs: [],
  isLike: false,
};

const mainHomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ROCK_CLASSIC":
      return {
        ...state,
        rockClassic: action.payload,
      };
    case "POP_CULTURE":
      return {
        ...state,
        popCulture: action.payload,
      };
    case "HIP_HOP":
      return {
        ...state,
        hipHop: action.payload,
      };
    case "SELECTED_SONG":
      return {
        ...state,
        selected: action.payload,
      };
    case "LIKED_SONGS":
      return {
        ...state,
        likedSongs: state.likedSongs.concat(action.payload),
      };
    case "IS_LIKE":
      return {
        ...state,
        isLike: !state.isLike,
      };
    default:
      return state;
  }
};
export default mainHomeReducer;
