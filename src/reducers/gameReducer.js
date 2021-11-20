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
        for (let k = 0; k < 10; k++) {
            for (let l = 0; l < 10; l++) {
                // console.log(fleetArr[k][l])
                if ((value === 'lightBlueSquare') &&
                    ((fleetArr[k][l] === 100)
                        || (fleetArr[k][l] === 200)
                        || (fleetArr[k][l] === 300)
                        || (fleetArr[k][l] === 400)
                        || (fleetArr[k][l] === 500))) {

                    state[action.x][action.y] = 'lightGreenSquare';
                    console.log("ship square was hit")
                } else {
                    state[action.x][action.y] = 'darkBlueSquare';
                }
                // else if (value === 'lightBlueSquare' && fleetArr[k][l] === null) {

                //     state[action.x][action.y] = 'darkBlueSquare';
                //     // console.log("this was a miss")
                // }
            }
        }

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