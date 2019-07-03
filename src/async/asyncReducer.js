import * as actionTypes from './asyncConstants';

const initialState = {
    loading: false
}

const asyncReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ASYNC_ACTION_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.ASYNC_ACTION_FINISH:
            return {
                ...state,
                loading: false
            }

        case actionTypes.ASYNC_ACTION_ERROR:
            return {
                ...state,
                loading: false
            }
        
        default:
            return state;
    }
}

export default asyncReducer;