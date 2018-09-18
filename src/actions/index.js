export const SQUARE_CLICK = 'SQUARE_CLICK';
export const BACK_TO_STEP = 'BACK_TO_STEP';

export function selectSquareAction(isXNext, value){
    console.log('isXNext',isXNext);
    return {
        type:SQUARE_CLICK,
        payload:{isXNext:isXNext,value}
    }
}


export function moveBackInHistory(moveNumber){
    console.log('moveBackInHistory step', moveNumber);
    return {
        type:BACK_TO_STEP,
        payload:{moveNumber}
    }
}