
import {combineReducers} from 'redux';
import eventReducer from '../features/event/eventReducers';
import {reducer as formReducer} from 'redux-form';
import modalReducer from '../features/modals/ModalReducer';
import authReducer from '../features/auth/authReducer';
import asyncReducer from '../async/asyncReducer';
import {reducer as ToastrReducer} from 'react-redux-toastr';


const rootReducer = combineReducers({
    events: eventReducer,
    form: formReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer,

});

export default rootReducer;