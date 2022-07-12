import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultWord="life" />
      <footer>
        This project was coded by <b>Victoria Martynenko</b> and is open-sourced
        on{" "}
        <a
          href="https://github.com/v-victoria/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://friendly-sorbet-75c8cf.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
