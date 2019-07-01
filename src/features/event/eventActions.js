import * as actionConsts from './eventConstants';

export const createEvent = (event) => {
    return {
        type: actionConsts.CREATE_EVENT,
        payload:{
            event
        }
    }
}

export const updateEvent = (event) => {
    return {
        type: actionConsts.UPDATE_EVENT,
        payload:{
            event
        }
    }
}

export const deleteEvent = (eventId) => {
    return {
        type: actionConsts.DELETE_EVENT,
        payload:{
            eventId
        }
    }
}

