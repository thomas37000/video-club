import logo from "./logo.svg";
import "./App.css";
import GetAllMovies from "./components/getAllMovies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Video Club</h1>
      <GetAllMovies />
    </div>
  );
}

export default App;
