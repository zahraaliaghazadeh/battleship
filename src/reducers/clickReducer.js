export default function clickReducer(state = 0, action) {
    if ((action.type === 'boardClick') && (action.color === "whiteColor")) {
        return state + 1;
    } else if ((action.type === 'boardClick') && (action.color === 'blackColor')) {
        return state - 1;
    }
    return state;
}