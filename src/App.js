import logo from "./logo.svg";
import "./App.css";
import getAllMovies from "./components/getAllMovies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Video Club</h1>
      <getAllMovies />
    </div>
  );
}

export default App;
