import { Component } from './components/Component/Component';

import './App.css';

function App({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello React
        </p>
        <Component />
      </header>
    </div>
  );
}

export default App;
