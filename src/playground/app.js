class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
    this.state = {
      options: [],
      title: "",
      subtitle: "Put your life un the hands of a computer",
      selection: "",
    };
  }

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

  handleDeleteSingleOption(optionToRemove) {
    this.setState((prevState) => ({
      //set options list to be a filtered version of the previous state. If the input option is in the list, set the array to not contain that item.
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
    console.log("removed" + optionToRemove);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter a valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This already exists";
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat([option]),
      }));
    }
  }

  handlePick() {
    const length = this.state.options.length;
    const randomIndex = Math.floor(Math.random() * length);
    //this.setState(() => {
    //  return { selection: this.state.options[randomIndex] };
    //});
    this.state.options[randomIndex];
    console.log(randomIndex);
    alert(randomIndex);
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
        <User name='Lars' age='24' />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOption}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
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
};

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

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const input = e.target.elements.addOption.value.trim();
    const error = this.props.handleAddOption(input);

    this.setState(() => ({ error }));

    if (!error) {
      addOption.value = "";
    }
  }
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

ReactDOM.render(
  <IndecisionApp options={["Option 1", "Option 2"]} />,
  document.getElementById("app")
);
