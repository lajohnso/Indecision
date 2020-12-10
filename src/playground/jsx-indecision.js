console.log("app.js is running");

//JSX - JS extension provided by react
//Babel - JS compiler

const app = {
  title: "Idecision App",
  subtitle: "This is some info",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log("form submitted");
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderApp();
};

const clearOptions = () => {
  if (app.options.length > 0) {
    app.options = [];
    console.log("i removed the items");
  }
  renderApp();
};

const onMakeDecision = () => {
  const randint = Math.floor(Math.random() * app.options.length);
  console.log(randint);
  const option = app.options[randint];
  alert(option);
};

const appRoot = document.getElementById("app");

let array = ["string", ["string2"]];

const numbers = [55, 101, 1000];

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options.length > 0 ? "Here are your options:" : "No options..."}
      </p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        Make a decision
      </button>
      <button onClick={clearOptions}>reset</button>
      {numbers.map((number) => {
        return <p key={number}>{number}</p>;
      })}
      <ol>
        {app.options.map((option) => {
          console.log(app.options);
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' placeholder='Enter string' name='option'></input>
        <button>Submit</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
renderApp();
