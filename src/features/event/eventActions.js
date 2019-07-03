import * as actionConsts from './eventConstants';
import {asyncActionStart, asyncActionFinish, asyncActionError} from '../../async/asyncActions';
import {fetchSampleData} from '../../data/mockApi';
import { toastr } from 'react-redux-toastr';

export const createEvent = (event) => {
    return async dispatch => {
        try{
            dispatch({type: actionConsts.CREATE_EVENT, payload:{ event }});
            toastr.success('Success!', 'Event has been created');

        }catch(error){
            toastr.error('Oops', 'Something went wrong');             
        }
    }
}

export const updateEvent = (event) => {
    return async dispatch => {
        try{
            dispatch({ type: actionConsts.UPDATE_EVENT, payload:{ event }});
            toastr.success('Success!', 'Event has been updated');

        }catch(error){
            toastr.error('Oops', 'Something went wrong');             
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

export const loadEvents = () => {
    return async dispatch => {
        try{
            dispatch(asyncActionStart());
            const events = await fetchSampleData();
            dispatch({type: actionConsts.FETCH_EVENTS, payload: {events}})
            dispatch(asyncActionFinish());

        }catch (error) {
            console.log(error);
            dispatch(asyncActionError());

        }
    }
}