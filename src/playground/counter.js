class Counter extends React.Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  decrement() {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        return {
          count: prevState.count - 1,
        };
      }
    });
  }

  resetCount() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.increment}> +1</button>
        <button onClick={this.decrement}> -1</button>
        <button onClick={this.resetCount}> Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;

// const incrementCount = () => {
//   count++;
//   renderCounterApp();
//   console.log(count);
// };

// const decrementCount = () => {
//   count--;
//   renderCounterApp();
//   console.log(count);
//   console.log("-1");
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log("reset");
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={incrementCount}>+1</button>
//       <button onClick={decrementCount}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
