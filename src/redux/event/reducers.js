import actions from './actions';

const {
    FETCH_EVENTS,
    EVENTS_ISFETCHING
  } = actions;

  const initialState = {
    events: null,
    isFetching: false,
    fetched: false
  };

  const eventsReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
      case FETCH_EVENTS:
        console.log(`============FETCHED EVENTS============`);
        return { ...state, events: payload, isFetching: false, fetched: true };
      case EVENTS_ISFETCHING:
        console.log(`============FETCHING EVENTS============`);
        return { ...state, events: null, isFetching: true, fetched: false };
      default:
        return state;
    }
  };
  
  export default eventsReducer;