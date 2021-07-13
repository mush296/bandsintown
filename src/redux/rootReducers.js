import { combineReducers } from "redux";
import  artistReducer  from './artist/reducers';
import eventsReducer from './event/reducers';


const rootReducers = combineReducers({
    artist: artistReducer,
    events: eventsReducer
});

export default rootReducers;
