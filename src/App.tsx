import logo from './logo.svg';
import './App.css';
import BoxComponent from './layouts/Box';
import SetBox from './layouts/SetBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <main>
        <BoxComponent/>
        <br/>
        <SetBox/>
      </main>
    </div>
  );
}

export default App;
