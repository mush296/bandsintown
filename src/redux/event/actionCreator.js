import eventService from '../../services/eventService';
import actions from './actions';

const { fetchEvents, eventsIsFetching} = actions;

const getEvents = artistName => {
    return async dispatch => {
        try {
          dispatch(eventsIsFetching());
          const response = await eventService.getEvents(artistName);
          dispatch(fetchEvents(response.data));
        } catch (err) {
          const error = new Error("Problem fetching events");
          error.inner = err;
          throw error;
        }
      };
};

export default getEvents;