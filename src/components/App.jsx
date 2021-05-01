import "../styles/index.scss";
import Receipes from "./Receipes";

const App = () => {
  return (
    <>
      <section className="hero">
        <main>
          <section>
            <h1>Oh hi, react</h1>
          </section>
          <section>
            <Receipes />
          </section>
        </main>
      </section>
    </>
  );
};

export default App;
