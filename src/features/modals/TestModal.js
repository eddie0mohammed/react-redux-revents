import React from 'react'
import { Modal } from 'semantic-ui-react';
import * as actionCreators from './ModalActions';
import {connect} from 'react-redux';

const TestModal = (props) => {
    const {close} = props;
    return (
            <Modal closeIcon="close" open={true} onClose={close}>
              <Modal.Header>Test Modal</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <p>Test Modal... nothing to see here</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => dispatch(actionCreators.closeModal()),
    }
}


export default connect(null, mapDispatchToProps)(TestModal)
