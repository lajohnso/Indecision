import Modal from "react-modal";
import React from "react";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel={"Selected Option"}
    onRequestClose={props.handleCloseModal}
  >
    <h3>Selected Options</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Close</button>
  </Modal>
);

export default OptionModal;
