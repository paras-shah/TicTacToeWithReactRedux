import React, { Component } from 'react';
import { selectSquareAction } from '../actions'; 
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import ErrorBoundary from './error_boundary';

class Square extends Component {
  render() {
    return (
      <ErrorBoundary>
       <button 
            className="square" 
            onClick={()=>{
              console.log('click',this.props);
              this.props.selectSquareAction(this.props.isXNext,this.props.value);
            }}
            value=''>
            { this.props.squares[this.props.value-1]?this.props.squares[this.props.value-1]:''}
        </button>
        </ErrorBoundary>
    );
  }
}

function mapStateToProps(state){
  // SquareReducer: {squares: Array(9), moveNumber: 0, isXNext: true}__proto__: Object
  //console.log('map State',state);
  const current = state.history[state.moveNumber];  
  //console.log('current state',current);
  
  return ({squares:current.squares,
    moveNumber:state.moveNumber,
    isXNext:state.isXNext,
    winner:state.winner});
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectSquareAction },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);

