import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo or Not Todo</h1>
        <h3>Organize Your Life, One Todo at a Time</h3>
      </header>
      <Todos/>
      <AddTodo/>
    </div>
  );
}

export default App;
