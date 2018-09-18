import React, { Component } from 'react';
import Board from './board'; 
import Message from '../containers/message'; 
import Moves from '../containers/moves'; 
    
export default class App extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
           <Board></Board> 
        </div>
        <div className="game-info">
          <Message></Message>
          <ol>
            <Moves></Moves>
           </ol>
        </div>
      </div>

     
    );
  }
}
