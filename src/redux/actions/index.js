export const ROCK_CLASSIC = "ROCK_CLASSIC";
export const POP_CULTURE = "POP_CULTURE";
export const HIP_HOP = "HIP_HOP";
export const SELECTED_SONG = "SELECTED_SONG";

export const addSongs = (type, songs) => ({ type: type, payload: songs });
export const selectedSong = song => ({ type: SELECTED_SONG, payload: song });

// export const addPopSongs = songs => ({ type: POP_CULTURE, payload: songs });
// export const addHipHopSongs = songs => ({ type: HIP_HOP, payload: songs });

export const getSongs = (type, artistName) => {
  return async dispatch => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (resp.ok) {
        const { data } = await resp.json();
        console.log(data);
        dispatch(addSongs(type, data));
        // dispatch(addRockSongs(data));
        // dispatch(addPopSongs(data));
        // dispatch(addHipHopSongs(data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
