import actions from './actions';

const {
    FETCH_ARTIST,
    ARTIST_ISFETCHING
  } = actions;

  const initialState = {
    artist: null,
    isFetching: false,
    fetched: false
  };

  const artistReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
      case FETCH_ARTIST:
        console.log(`============FETCHED ARTIST============`);
        return { ...state, artist: payload, isFetching: false, fetched: true };
      case ARTIST_ISFETCHING:
        console.log(`============FETCHING ARTIST============`);
        return { ...state, artist: null, isFetching: true, fetched: false };
      default:
        return state;
    }
  };
  
  export default artistReducer;