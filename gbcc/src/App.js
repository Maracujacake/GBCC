import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default App;
