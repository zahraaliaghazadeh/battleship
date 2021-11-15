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
    return state;
}