
import {combineReducers} from 'redux';
import eventReducer from '../features/event/eventReducers';



const rootReducer = combineReducers({
    events: eventReducer,

});

export default rootReducer;