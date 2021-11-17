import { ShipTypes } from "./ShipTypes";

export const generateFleet = () => { 
        let fleet = [10];
    for (let i = 0; i < 10; i++) {
        fleet[i] = [10];
        for (let j = 0; j < 10; j++) {
        fleet[i][j] = null;
        }
    }
    for (let i = 0; i < ShipTypes.length; i++) {
        fleet = generateShipPositions(ShipTypes[i], fleet);
    }
    console.log(fleet)
    return fleet;
};

const generateShipPositions = (ship, fleet) => {
    let shipStartPosition = null;
    let continueLoop = true;
    while (continueLoop) {
        shipStartPosition = getRandomPosition();
        if (positionIsFree(fleet, shipStartPosition)) {
        let x = shipStartPosition[0];
        let y = shipStartPosition[1];
        let directions = getDirections();
        console.log(directions)
        fleet[x][y] = ship.id * 100;
        fleet = refillNeighbourCells(fleet, x, y, ship.id);
        }
    }
};

const positionIsFree = (fleet, position) => {
    let x = position[0];
    let y = position[1];
    return !(fleet[x][y] > 0);
    };

const getDirections = () => {
    let directions = [];
    for (let i = 0; directions.length < 4; i++) {
        let number = getRandomNumber(4);
        if (directions.indexOf(number) === -1) {
        directions.push(number);
        }
    }
return directions;
};

const getRandomPosition = () => {
    const max = 9;
    return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)]
};

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
};

const refillNeighbourCells = (fleet, x, y, shipId) => {
    if (y < 9 && fleet[x][y + 1] === null) {
      fleet[x][y + 1] = shipId;
    }
    if (x < 9 && y < 9 && fleet[x + 1][y + 1] === null) {
      fleet[x + 1][y + 1] = shipId;
    }
    if (x < 9 && fleet[x + 1][y] === null) {
      fleet[x + 1][y] = shipId;
    }
    if (x < 9 && y > 0 && fleet[x + 1][y - 1] === null) {
      fleet[x + 1][y - 1] = shipId;
    }
    if (y > 0 && fleet[x][y - 1] === null) {
      fleet[x][y - 1] = shipId;
    }
    if (x > 0 && y > 0 && fleet[x - 1][y - 1] === null) {
      fleet[x - 1][y - 1] = shipId;
    }
    if (x > 0 && fleet[x - 1][y] === null) {
      fleet[x - 1][y] = shipId;
    }
    if (x > 0 && y < 9 && fleet[x - 1][y + 1] === null) {
      fleet[x - 1][y + 1] = shipId;
    }
    return fleet;
  };


