import React from "react";

const Option = (props) => {
  return (
    <div>
      <br />
      <div style={{ display: "inline-block" }}>{props.optionText}</div>
      <div style={{ display: "inline-block" }}>
        <button
          onClick={(e) => props.handleDeleteSingleOption(props.optionText)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Option;
