const actions = {
  FETCH_ARTIST: "FETCH_ARTIST",
  ARTIST_ISFETCHING: "ARTIST_ISFETCHING",

  fetchArtist: data => {
    return {
      type: actions.FETCH_ARTIST,
      payload: data,
    };
  },

  artistIsFetching: () => {
    return {
      type: actions.ARTIST_ISFETCHING,
    };
  },
};

export default actions;