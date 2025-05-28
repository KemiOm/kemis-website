import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <video autoPlay loop muted width="640" height = "360">
        <source src="/assets/STG_pow.mp4" type="video/mp4"/>
        Your browser doesn't support the video tag.
      </video>
    
      </header>
    </div>
  );
}

export default App;
