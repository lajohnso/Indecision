let count = 0;

const incrementCount = () => {
  count++;
  renderCounterApp();
  console.log(count);
};

const decrementCount = () => {
  count--;
  renderCounterApp();
  console.log(count);
  console.log("-1");
};

const reset = () => {
  count = 0;
  renderCounterApp();
  console.log("reset");
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>+1</button>
      <button onClick={decrementCount}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
