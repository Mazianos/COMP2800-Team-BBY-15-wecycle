
import './App.css';
import background from './components/images/landingpage2.jpg';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={background} />
      </header>
      <div>
        hello world
      </div>
    </div>
  );
}

export default App;
