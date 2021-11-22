import generateFleet from '../Components/generateShips';
import { Ships } from '../Components/Constants/Ships';

const INITIAL_SHIPS_NUM = 17;

const defaultState = window.localStorage.getItem('freeGame') ? JSON.parse(window.localStorage.getItem('freeGame')) : {
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
    ships: Ships.map((ship) => ({ id: ship.id, hitPoints: ship.hitPoints })),
    totalShips: INITIAL_SHIPS_NUM
}
let fleetArr = generateFleet()

export default function gameReducer(state = defaultState, action) {
    if (action.type === 'boardClick') {
        const value = state.board[action.x][action.y];

        if ((value === 'lightBlueSquare') &&
            ((fleetArr[action.x][action.y] === 1)
                || (fleetArr[action.x][action.y] === 2)
                || (fleetArr[action.x][action.y] === 3)
                || (fleetArr[action.x][action.y] === 4)
                || (fleetArr[action.x][action.y] === 5))) {
            const id = fleetArr[action.x][action.y]
            state.board[action.x][action.y] = 'lightGreenSquare';

            const currHp = state.ships[id - 1].hitPoints - 1
            // const currShipSize = state.ships[id-1].size
            // console.log(`currHp=${currHp}`)
            if (currHp === 0) {
                // change all curr ships to darkGreen
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        if (fleetArr[i][j] === id) {
                            state.board[i][j] = 'darkGreenSquare'
                        }
                    }
                }
            }

            const newShips = [
                ...state.ships.slice(0, id - 1),
                {
                    ...state.ships[id - 1],
                    hitPoints: currHp
                },
                ...state.ships.slice(id, state.ships.length)
            ]
            const newState = {
                board: [...state.board],
                ships: [...newShips],
                totalShips: state.totalShips - 1
            }
            storeToLocalStorage(newState);

            return newState;
        }
        else if (value === 'lightBlueSquare' && fleetArr[action.x][action.y] === null) {

            state.board[action.x][action.y] = 'darkBlueSquare';

            const newState = {
                board: [...state.board],
                ...state,
            }

            storeToLocalStorage(newState);
            return newState;
        }

    }



    if (action.type === 'START') {
        for (let m = 0; m < state.board.length; m++) {
            for (let n = 0; n < state.board.length; n++) {
                state.board[m][n] = 'lightBlueSquare';
            }
        }
        const newState = {
            board: [...state.board],
            ships: Ships.map((ship) => ({ id: ship.id, hitPoints: ship.hitPoints })),
            totalShips: INITIAL_SHIPS_NUM
        }
        clearLocalStorage();
        return newState;
    }


    return state;
}

function storeToLocalStorage(state) {
    window.localStorage.setItem('freeGame', JSON.stringify(state));
}

function clearLocalStorage() {
    window.localStorage.clear();
}

