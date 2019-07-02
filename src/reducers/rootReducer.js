
import {combineReducers} from 'redux';
import eventReducer from '../features/event/eventReducers';
import {reducer as formReducer} from 'redux-form';
import modalReducer from '../features/modals/ModalReducer';
import authReducer from '../features/auth/authReducer';


const rootReducer = combineReducers({
    events: eventReducer,
    form: formReducer,
    modals: modalReducer,
    auth: authReducer,

});

export default rootReducer;