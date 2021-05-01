import { useState } from "react";

const Receipes = () => {
  const [counter, setcounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={() => setcounter((prev) => prev - 1)}>decrease</button>
      <button onClick={() => setcounter((prev) => prev + 1)}>increse</button>
    </div>
  );
};

export default Receipes;
