import logo from "./logo.svg";
import "./App.css";
import { dataBase } from "./test";
import defaultTruc from "./test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="name">{dataBase[0].name}</p>
        <p>{defaultTruc()} SHTRUMPF</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
