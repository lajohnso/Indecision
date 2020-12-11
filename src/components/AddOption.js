import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const input = e.target.elements.addOption.value.trim();
    const error = this.props.handleAddOption(input);

    this.setState(() => ({ error }));

    if (!error) {
      addOption.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' id='addOption' name='addOption'></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default AddOption;
