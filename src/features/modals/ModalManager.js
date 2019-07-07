import React from 'react'
import {connect} from 'react-redux';
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import UnauthModal from './UnauthModal';


const modalLookUp = {
    TestModal,
    LoginModal,
    RegisterModal,
    UnauthModal
}

const ModalManager = (props) => {
    const {currentModal} = props;
    let renderedModal;

    if (currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookUp[modalType];

        renderedModal = <ModalComponent {...modalProps} />
    }
    
    return (
      <span>{renderedModal}</span>
    )
}

const mapStateToProps = (state) => {
    return {
        currentModal: state.modals
    }
}

export default connect(mapStateToProps)(ModalManager);
