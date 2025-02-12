import './assets/css/App.css';
import LogoPrincipal from './components/LogoPrincipal.js';
import LinksBar from './components/LinksBar.js';

function App() {
  return (
    <div className="App">
      <div className="appContent">
        <LogoPrincipal></LogoPrincipal>
        <LinksBar></LinksBar>
      <p className="appTxt">GF Fútbol 2025.</p>
      </div>
    </div>
  );
}

export default App;
