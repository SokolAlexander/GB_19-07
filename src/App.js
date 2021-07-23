import { Counter, Component } from './components/Component/Component';

import './App.css';

function App({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello React</p>
        <Component />
      </header>
    </div>
  );
}

export default App;

const arr = [1, 2];

// const one = arr[0];
// const two = arr[1];


const obj = {
  a: 3
};

const { a } = obj;

const [one, two, three] = arr;