import React from 'react';
import './css/App.css';
import Board from './components/Board';

const App = () => {
  
    return (
      <div className="App-header">
        <div className="App">
          <div className="game">
          <Board />
          </div>
        </div>
      </div>
    );
  }

export default App;