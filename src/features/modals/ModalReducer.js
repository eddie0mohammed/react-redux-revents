
import * as actions from './ModalConstants';

const initialState = null;

const modalReducer = (state = initialState, action) => {
    switch (action.type){
        case actions.MODAL_OPEN:
            const {modalType, modalProps} = action.payload;
            return {modalType, modalProps};
        
        case actions.MODAL_CLOSE:
            return null;
        
        default:
            return state;
    }
}

export default modalReducer;