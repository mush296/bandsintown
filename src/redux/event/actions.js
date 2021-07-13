const actions = {
    FETCH_EVENTS: "FETCH_EVENTS",
    EVENTS_ISFETCHING: "EVENTS_ISFETCHING",
  
    fetchEvents: data => {
      return {
        type: actions.FETCH_EVENTS,
        payload: data,
      };
    },
  
    eventsIsFetching: () => {
      return {
        type: actions.EVENTS_ISFETCHING,
      };
    },
  };
  
  export default actions;