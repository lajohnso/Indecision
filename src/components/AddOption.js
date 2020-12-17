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
        {this.state.error && (
          <p className='add-option-error'>{this.state.error}</p>
        )}
        <form className='add-option' onSubmit={this.handleAddOption}>
          <input
            className='add-option__input'
            type='text'
            id='addOption'
            name='addOption'
          ></input>
          <button className='button'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
