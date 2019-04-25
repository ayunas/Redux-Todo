import React from 'react';
import './App.scss';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import lambdaLogo from './Lambda_Logo.png';
import reduxLogo from './Redux.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo or Not Todo</h1>
        <h3>Organize Your Life, One Todo at a Time</h3>
      </header>
      <AddTodo/>
      <Todos/>
      <footer>
       
       <figure>
        
        <div>
          <figcaption>Built with: </figcaption>
          <img src={reduxLogo} />
        </div>

        <div>
          <figcaption>Project of: </figcaption>
          <a href='http://www.lambdaschool.com' target="_blank"> <img src={lambdaLogo} /></a>
        </div>

       </figure>
        
        
      </footer>
    </div>
  );
}

export default App;
