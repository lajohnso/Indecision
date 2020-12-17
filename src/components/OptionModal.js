import Modal from "react-modal";
import React from "react";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel={"Selected Option"}
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>You should perform this task:</h3>
    {props.selectedOption && (
      <p className='modal__body'>{props.selectedOption}</p>
    )}
    <div className='centered-element'>
      <button className='button' onClick={props.handleCloseModal}>
        Close
      </button>
    </div>
  </Modal>
);

export default OptionModal;
