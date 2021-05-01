import { render } from "react-dom";
import App from "./components/App";

render(<App />, document.getElementById("root"));

const elvenShieldReceipe = {
  a: "s",
  b: "c",
  d: "a",
  k: "s",
};

const x = {
  ...elvenShieldReceipe,
  y: "z",
};

console.log(elvenShieldReceipe);
console.log(x);
