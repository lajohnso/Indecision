const obj = {
  name: "name",
  getName() {
    return this.name;
  },
};

const getName = obj.getName.bind(obj);

console.log(getName());

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options,
      title: "",
      subtitle: "Put your life un the hands of a computer",
      selection: "",
    };
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
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <User name='Lars' age='24' />
      </div>
    );
  }
}

IndecisionApp.defultProps = {
  options: [],
};

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
      {props.options.map((option) => (
        <Option key={option} optionText={option} />
      ))}
    </div>
  );
};

const Option = (props) => {
  return <div>{props.optionText}</div>;
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

    addOption.value = "";
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
