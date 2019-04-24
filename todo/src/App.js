import React from 'react';
import './App.scss';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo or Not Todo</h1>
        <h3>Organize Your Life, One Todo at a Time</h3>
      </header>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
