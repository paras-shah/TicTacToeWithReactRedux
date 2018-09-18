import React, { Component } from 'react';
import { moveBackInHistory } from '../actions'; 
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


function Link(props ){
  return  ( 
      <li>
        <button onClick={()=>{
          props.moveBackFunction()}}>{props.message}</button>
      </li>
  );
}

class Moves extends Component {
 
  
  showList(history,moves){
    return history.map((move,index)=>{
      const message = index ?`Go to move #${index}`: 'Goto game start ';
      return (<Link key={index} 
      moveNumber={index} 
      message={message} 
      moveBackFunction ={()=> this.props.moveBackInHistory(index)}>
      </Link>);
    });
      
  }

  render() {
    return (
      <React.Fragment>
          {this.showList(this.props.history,this.props.moveNumber)}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state){
  return (state);
}

/*
function mapDispatchToProps(dispatch){
  return bindActionCreators({ moveBackInHistory : moveBackInHistory },dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Moves);

*/

export default connect(mapStateToProps, {moveBackInHistory : moveBackInHistory})(Moves);

