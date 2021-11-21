import { combineReducers } from 'redux';
import clickReducer from './clickReducer';
import gameReducer from "./gameReducer";
import normalGameReducer from './normalGameReducer';

export default combineReducers({
    game: gameReducer,
    clickCount: clickReducer,
    normalGame: normalGameReducer,
})