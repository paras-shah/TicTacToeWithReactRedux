import * as types from "../actions";

const initialState = {
  history:[{squares: Array(9).fill(null)}],
  moveNumber: 0,
  isXNext: true,
  winner:null
}

function checkWinner(squares){
  const winningCombination = [[0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]];
   let draw = false;
   
  for(let winningPosition of  winningCombination){
    let [first,second,third] = winningPosition;
   // console.log(sqaures[first]   ,sqaures[second]   ,sqaures[third]   );
    if (squares[first]    
      && squares[first] === squares[second] 
      && squares[second] === squares[third]) {
        return squares[first];
      }
  }
  if(squares.indexOf(null)<0)
    return true;
  return null;
}

function moveBackToState(state, moveNumber){
  const history = state.history.slice(0,moveNumber+1);
  const newSquareState = history[moveNumber];
  const squares = newSquareState.squares.slice();
  
  const backState = {
    history: history,
    moveNumber:moveNumber,
    isXNext: moveNumber%2===0? true:false,
    winner:checkWinner(squares)/* check current sqaures as state is not updated*/
  }; 
  return backState;
}

function updateState(state, params){
  const { history, moveNumber, isXNext, winner } = state;
  const historyShallowCopy = history.slice(0,moveNumber+1);
  const currentState = historyShallowCopy[moveNumber];

  const squares = currentState.squares;
  const squaresShallowCopy = squares.slice();
  /* otherwise it is updating previos state as well*/

  // console.log('squares',squares);
  if(squaresShallowCopy[params.value-1])
    return state; 
  else
    squaresShallowCopy[params.value-1] = isXNext ? 'X' : 'O';  
  
  // console.log('HISTORY',historyShallowCopy);
  // console.log('squares',squares);
  // console.log('HISTORY',historyShallowCopy.concat({squares}));
  
  const newState = {
    history: history.concat([{squares:squaresShallowCopy}]),
    moveNumber:state.moveNumber+1,
    isXNext:!state.isXNext,
    winner:checkWinner(squaresShallowCopy)// check current sqaures as state is not updated
  }; 

  return newState;
}

export default function ( state = initialState, action =  { type:'', payload:{value:'',isXNext:''}} ){
  console.log('action',action);
  const params = action.payload;
    
  if(state.winner!==null)
    return state; 
  
  switch(action.type){
    case types.BACK_TO_STEP:
      const backState = moveBackToState(state, params.moveNumber);
      console.log('backState',backState);
      return backState;
      
    case types.SQUARE_CLICK:
      const newState = updateState(state, params);
      console.log('newState',newState);
      return newState;
    
    default: 
      console.log('default state',  state);
      return state;
  }
}