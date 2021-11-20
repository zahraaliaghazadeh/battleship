import generateFleet from '../Components/generateShips'

const defaultState = [
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare', 'lightBlueSquare'],

];
let fleetArr = generateFleet()

export default function gameReducer(state = defaultState, action) {
    if (action.type === 'boardClick') {
        const value = state[action.x][action.y];
        // if (value === 'lightBlueSquare') {
        //     state[action.x][action.y] = 'lightGreenSquare';
        // } else{
        //     state[action.x][action.y] = 'lightBlueSquare';
        // } 

        // let shipSquareCounter = 0;
        // let gameOver = checkAllSunk()
        // while(gameOver != true){


            for (let k = 0; k < 10; k++) {
                for (let l = 0; l < 10; l++) {
                    // console.log(fleetArr[k][l])
                    if ((value === 'lightBlueSquare') &&
                        ((fleetArr[action.x][action.y] === 100)
                            || (fleetArr[action.x][action.y] === 200)
                            || (fleetArr[action.x][action.y] === 300)
                            || (fleetArr[action.x][action.y] === 400)
                            || (fleetArr[action.x][action.y] === 500))) {
                        // shipSquareCounter ++;
                        state[action.x][action.y] = 'lightGreenSquare';
                        // console.log("ship square was hit")
                    }
                    else if (value === 'lightBlueSquare' && fleetArr[action.x][action.y] === null) {

                        state[action.x][action.y] = 'darkBlueSquare';
                        // console.log("this was a miss")
                    }

                    // console.log("the number of hit ship squares is: ", shipSquareCounter)

                }
            }

        // }
            return [...state];
        
    }


    // if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
    //     for (let i = 0; i < state.length; i++) {
    //         for (let j = 0; j < state.length; j++){
    //             state[i][j] = '';
    //         }
    //     }
    //     return [...state];
    // }



    if (action.type === 'START') {
        for (let m = 0; m < state.length; m++) {
            for (let n = 0; n < state.length; n++) {
                state[m][n] = 'lightBlueSquare';
            }
        }
        return [...state];
    }


    return state;
}


// function checkAllSunk(board) {
//     let sunkSqCounter = 0;
//     for (let m = 0; m < 10; m++) {
//         for (let n = 0; n < 10; n++) {
//             if (board[m][n] === 'lightGreenSquare' || board[m][n] === 'darkGreenSquare') {
//                 sunkSqCounter++;
//             }
//         }
//     }
//     if (sunkSqCounter >= 17) {
//         console.log("game over")
//         return true
//     }
// }