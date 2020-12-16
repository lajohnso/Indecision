import React from "react";
import Action from "../components/Action";
import AddOption from "../components/AddOption";
import Header from "../components/Header";
import Options from "../components/Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    title: "",
    subtitle: "Put your life un the hands of a computer",
    selectedOption: undefined,
  };

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteSingleOption = (optionToRemove) => {
    this.setState((prevState) => ({
      //set options list to be a filtered version of the previous state. If the input option is in the list, set the array to not contain that item.
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
    console.log("removed" + optionToRemove);
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This already exists";
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat([option]),
      }));
    }
  };

  handlePick = () => {
    const length = this.state.options.length;
    const randomIndex = Math.floor(Math.random() * length);
    //this.setState(() => {
    //  return { selection: this.state.options[randomIndex] };
    //});
    this.state.options[randomIndex];
    console.log(randomIndex);
    this.setState(() => ({ selectedOption: "true" }));
  };

  componentDidMount() {
    try {
      console.log("did mount");
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("comp did update");
    }
  }

  componentWillUnmount() {
    console.log("will unmount");
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          optionsLength={this.state.options.length}
          handlePick={this.handlePick}
          selection={this.state.selection}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
