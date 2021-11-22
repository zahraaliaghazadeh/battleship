import { combineReducers } from 'redux';
import normalGameReducer from './normalGameReducer';
import gameReducer from "./gameReducer";

export default combineReducers({
    game: gameReducer,
    normalGameReducer: normalGameReducer,

})