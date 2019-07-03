import * as actionTypes from './asyncConstants';

export const asyncActionStart = () => {
    return {
        type: actionTypes.ASYNC_ACTION_START,
    }
}

export const asyncActionFinish = () => {
    return {
        type: actionTypes.ASYNC_ACTION_FINISH,
    }
}

export const asyncActionError = () => {
    return {
        type: actionTypes.ASYNC_ACTION_ERROR,
    }
}