class Visability extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisability = this.toggleVisability.bind(this);
    this.state = {
      visability: true,
    };
  }
  toggleVisability() {
    this.setState((prevState) => {
      return {
        visability: !prevState.visability,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Content Title</h1>
        <button onClick={this.toggleVisability}>
          {this.state.visability ? <p>hide</p> : <p>show</p>}
        </button>
        {this.state.visability && <h2>This is showing</h2>}
      </div>
    );
  }
}
ReactDOM.render(<Visability />, document.getElementById("app"));

// const content = {
//   title: "Visability Toggle",
//   subtitle: "hello",
// };

// const appRoot = document.getElementById("app");

// let visability = false;

// const toggleVisability = () => {
//   visability = !visability;
//   appRender();
//   console.log("yes it works");
// };

// const appRender = () => {
//   const app = (
//     <div>
//       <h1>{content.title}</h1>
//       <button onClick={toggleVisability}>{visability ? "Hide" : "Show"}</button>
//       {visability && <p>{content.subtitle}</p>}
//     </div>
//   );

//   ReactDOM.render(app, appRoot);
// };

// appRender();
