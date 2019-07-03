
import * as actionConstants from './eventConstants';

 const initialState = [];
  
const eventReducer = (state = initialState, action) => {
    switch(action.type){
        case actionConstants.CREATE_EVENT:
            return [...state, action.payload.event];

        case actionConstants.UPDATE_EVENT:
            return [...state.filter(event => event.id !== action.payload.event.id), action.payload.event];

        case actionConstants.DELETE_EVENT:
            return [...state.filter(event => event.id !== action.payload.eventId)];

        case actionConstants.FETCH_EVENTS:
            return action.payload.events
        

        default:
            return state;
    }
}

export default eventReducer;












    