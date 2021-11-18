const defaultState = [
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
    ['lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare','lightBlueSquare', 'lightBlueSquare'],
        
];

export default function gameReducer(state = defaultState, action) {
    if (action.type === 'boardClick') {
        const value = state[action.x][action.y];
        if (value === 'lightBlueSquare') {
            state[action.x][action.y] = 'lightGreenSquare';
        } else {
            state[action.x][action.y] = 'lightBlueSquare';
        }
        return [...state];
    }


    if (action.type === 'RESET' || action.type === 'RESET_GAMEBOARD_ONLY') {
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state.length; j++){
                state[i][j] = '';
            }
        }
        return [...state];
    }
    return state;
}