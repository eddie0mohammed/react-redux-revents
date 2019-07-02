import * as actions from './ModalConstants';

export const openModal = (modalType, modalProps) => {
    return {
        type: actions.MODAL_OPEN,
        payload:{
            modalType,
            modalProps
        }
    }
}

export const closeModal = () => {
    return {
        type: actions.MODAL_CLOSE,
        
    }
}