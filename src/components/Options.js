import React from "react";
import Option from "../components/Option";

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}> Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started</p>}
    {props.options.map((option) => (
      <Option
        key={option}
        optionText={option}
        handleDeleteSingleOption={props.handleDeleteSingleOption}
      />
    ))}
  </div>
);

export default Options;
