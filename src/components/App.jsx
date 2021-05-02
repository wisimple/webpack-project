import "../styles/index.scss";
import Receipes from "./Receipes";

const App = () => {
  return (
    <>
      <section>
        <main>
          <section>
            <h1>Oh hi, react</h1>
          </section>

          <Receipes />

          <div className="hero"></div>

          <ul>
            <li>ali</li>
            <li>veli</li>
          </ul>
        </main>
      </section>
    </>
  );
};

export default App;
