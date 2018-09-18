import React, { Component } from 'react';
import {connect} from 'react-redux';


class Message extends Component {
  getWinnerInformation(){
    if( this.props.winner === true )
     return  `Draw`;
    else if( this.props.winner )
      return  `${this.props.winner} has won the game`;
    else 
      return this.getTurnMessage();
  } 

  getTurnMessage(){
    return `Next Player : ${this.props.isXNext?"X":"O"}`;
  }

  render() {
    return (
      <div>
      {this.getWinnerInformation()}
      </div>
    );
  }
}

function mapStateToProps({isXNext,winner}){
  // SquareReducer: {squares: Array(9), stepNumber: 0, isXNext: true}__proto__: Object
  return ({isXNext,winner});
}

export default connect(mapStateToProps)(Message);

