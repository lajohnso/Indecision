const content = {
  title: "Visability Toggle",
  subtitle: "hello",
};

const appRoot = document.getElementById("app");

let visability = false;

const toggleVisability = () => {
  visability = !visability;
  appRender();
  console.log("yes it works");
};

const appRender = () => {
  const app = (
    <div>
      <h1>{content.title}</h1>
      <button onClick={toggleVisability}>{visability ? "Hide" : "Show"}</button>
      {visability && <p>{content.subtitle}</p>}
    </div>
  );

  ReactDOM.render(app, appRoot);
};

appRender();
