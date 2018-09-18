import React, { Component } from 'react';
import Square from '../containers/square'; 

export default class Board extends Component {
  render() {
    return (
        <React.Fragment>
          <section className="board-row">
            <Square value="1"></Square>
            <Square value="2"></Square>
            <Square value="3"></Square>
          </section>
          <section className="board-row">
            <Square value="4"></Square>
            <Square value="5"></Square>
            <Square value="6"></Square>
          </section>
          <section className="board-row">
            <Square value="7"></Square>
            <Square value="8"></Square>
            <Square value="9"></Square>
          </section>
        </React.Fragment>
    );
  }
}
