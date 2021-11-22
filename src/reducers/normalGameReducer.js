import generateFleet from '../Components/generateShips';
import { Ships } from '../Components/Constants/Ships';

const INITIAL_SHIPS_NUM = 17;

const INITIAL_SHIPS = Ships.map((ship) => ({ id: ship.id, hitPoints: ship.hitPoints }));

const defaultState = window.localStorage.getItem('normalGame') ? JSON.parse(window.localStorage.getItem('normalGame')) : {
    user: {
        board: [
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
        ],
        ships: [...INITIAL_SHIPS],
        totalShips: INITIAL_SHIPS_NUM
    },
    ai: {
        board: [
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
        ],
        ships: [...INITIAL_SHIPS],
        totalShips: INITIAL_SHIPS_NUM 
    }
}
let fleetArrUser = generateFleet()
let fleetArrAi = generateFleet()

export default function gameReducer(state = defaultState, action) {
    if (action.type === 'aiClick') {
        const newUserState = clickHandler(state.user, fleetArrUser, action.x, action.y);
        const newState = {
            ...state,
            user: newUserState
        }
        storeToLocalStorage(newState);
        return newState;
    }
    if (action.type === 'boardClick') {
        const newAiState = clickHandler(state.ai, fleetArrAi, action.x, action.y);
        const newState = {
            ...state,
            ai: newAiState
        }
        storeToLocalStorage(newState);
        return newState;

    }



    if (action.type === 'START') {
        for (let m = 0; m < state.ai.board.length; m++) {
            for (let n = 0; n < state.ai.board.length; n++) {
                state.ai.board[m][n] = 'lightBlueSquare';
            }
        }
        for (let m = 0; m < state.ai.board.length; m++) {
            for (let n = 0; n < state.ai.board.length; n++) {
                state.user.board[m][n] = 'lightBlueSquare';
            }
        }
        clearLocalStorage();
        return {
            user: {
                board: [...state.user.board],
                ships: [...INITIAL_SHIPS],
                totalShips: INITIAL_SHIPS_NUM
            },
            ai: {
                board: [...state.ai.board],
                ships: [...INITIAL_SHIPS],
                totalShips: INITIAL_SHIPS_NUM
            }
        }
    }


    return state;
}


function clickHandler(playerState, fleet, x, y) {
    const value = playerState.board[x][y];

        if ((value === 'lightBlueSquare') &&
            ((fleet[x][y] === 1)
                || (fleet[x][y] === 2)
                || (fleet[x][y] === 3)
                || (fleet[x][y] === 4)
                || (fleet[x][y] === 5))) {
            const id = fleet[x][y]
            playerState.board[x][y] = 'lightGreenSquare';
            const currHp = playerState.ships[id - 1].hitPoints - 1
            // const currShipSize = state.ships[id-1].size
            // console.log(`currHp=${currHp}`)
            if (currHp === 0) {
                // change all curr ships to darkGreen
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        if (fleet[i][j] === id) {
                            playerState.board[i][j] = 'darkGreenSquare';
                        }
                    }
                }
            }

            const newShips = [
                ...playerState.ships.slice(0, id - 1),
                {
                    ...playerState.ships[id - 1],
                    hitPoints: currHp
                },
                ...playerState.ships.slice(id, playerState.ships.length)
            ]
            return {
                board: [...playerState.board],
                ships: [...newShips],
                totalShips: playerState.totalShips - 1
            }
        }
        else if (value === 'lightBlueSquare' && fleet[x][y] === null) {
            playerState.board[x][y] = 'darkBlueSquare';
            return {
                ...playerState,
                board: [...playerState.board],
            }
        }
        return playerState

}

function storeToLocalStorage(state) {
    window.localStorage.setItem('normalGame', JSON.stringify(state));
}

function clearLocalStorage() {
    window.localStorage.clear();
}
