const initialState = {
  query: "",
  searchedSongs: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "SEARCHED":
      return {
        ...state,
        searchedSongs: action.payload,
      };

    default:
      return state;
  }
};
export default searchReducer;
