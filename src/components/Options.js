import React from "react";
import Option from "../components/Option";

const Options = (props) => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-h3'>Your options</h3>
      <button
        className='button button--link'
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className='widget-message'>Please add an option to get started</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteSingleOption={props.handleDeleteSingleOption}
      />
    ))}
  </div>
);

export default Options;
