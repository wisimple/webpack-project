import "./styles/index.scss";

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
