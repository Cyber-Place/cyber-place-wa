import './App.css';
import HeaderLogged from './components/header/headerLogged.component'

function App() {
  return (
    <div className="App">
        <HeaderLogged></HeaderLogged>
      <header className="App-header">
        <p>
          Bienvenido a Cyber Place
        </p>
        <a
          className="App-link"
          href="https://bit.ly/3n9qNeK"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comencemos
        </a>
      </header>
    </div>
  );
}

export default App;
