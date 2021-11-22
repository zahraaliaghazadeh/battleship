import { Ships} from "./Constants/Ships";


export default function generateFleet(){ 
    let fleet = [10];
    for (let i = 0; i < 10; i++) {
        fleet[i] = [10];
        for (let j = 0; j < 10; j++) {
        fleet[i][j] = null;
        }
    }
    for (let i = 0; i < Ships.length; i++) {
      fleet = generateShipPositions(Ships[i], fleet);
    }
    // console.log(fleet);
    return fleet;
};

const generateShipPositions = (ship, fleet) => {
    let shipStartPosition = getRandomPosition();
    while (!positionIsFree(fleet, shipStartPosition[0], shipStartPosition[1])) {
      shipStartPosition = getRandomPosition();
    }
    let x = shipStartPosition[0];
    let y = shipStartPosition[1];
    fleet[x][y] = ship.id;
    let directionOptions = ["LEFT", "RIGHT", "UP", "DOWN"];
    let directions = findDirectionOptions(ship.size, x, y, directionOptions, fleet);
    let choosenDirection = getRandomNumber(directions.length);
    fleet = placeShip(ship, x, y, directions[choosenDirection], fleet);
    return fleet;
};

const positionIsFree = (fleet, x, y) => {
    return (!(fleet[x][y] > 0));
};

const placeShip = (ship, x, y, direction, fleet) => {
  let xCopy = x;
  let yCopy = y;
  let shipSize = ship.size;
  while (shipSize > 0) {
    if (direction === "LEFT") {
      fleet[x][yCopy] = ship.id;
      yCopy--;
    } else if (direction === "RIGHT") {
      fleet[x][yCopy] = ship.id;
      yCopy++;
    } else if (direction === "UP") {
      fleet[xCopy][y] = ship.id;
      xCopy--;
    } else if (direction === "DOWN") {
      fleet[xCopy][y] = ship.id;
      xCopy++;
    }
    shipSize--;
  }
  return fleet;
}

const findDirectionOptions = (shipSize, x, y, directions, fleet) => {
  let options = ["LEFT", "RIGHT", "UP", "DOWN"];
  for (let i = 0; i < directions.length; i++) {
    let sizeCopy = shipSize;
    let xCopy = x;
    let yCopy = y;
    let index = options.indexOf(directions[i]);
    if (directions[i] === "LEFT") {
      if (yCopy - (sizeCopy - 1) >= 0) {
        while (sizeCopy > 1) {
          if (fleet[xCopy][yCopy - 1] !== null) {
            options.splice(index, 1);
          }
          yCopy--;
          sizeCopy--;
        }
      } else {
        options.splice(index, 1);
        
      }
    } else if (directions[i] === "RIGHT") {
      if (9 - yCopy >= (sizeCopy - 1)) {
        while (sizeCopy > 1) {
          if (fleet[xCopy][yCopy + 1] !== null) {
            options.splice(index, 1);
          }
          yCopy++;
          sizeCopy--;
        }
      } else {
        options.splice(index, 1);
      }
    } else if (directions[i] === "UP") {
      if (xCopy - (sizeCopy - 1) >= 0) {
        while (sizeCopy > 1) {
          if (fleet[xCopy - 1][yCopy] !== null) {
            options.splice(index, 1);
          }
          xCopy--;
          sizeCopy--;
        }
      } else {
        options.splice(index, 1);
      }
    } else if (directions[i] === "DOWN") {
      if (xCopy + (sizeCopy - 1) <= 9) {
        while (sizeCopy > 1) {
          if (fleet[xCopy + 1][yCopy] !== null) {
            options.splice(index, 1);
          }
          xCopy++;
          sizeCopy--;
        }
      } else {
        options.splice(index, 1);
      }
    }
  }
  return options;
}

const getRandomPosition = () => {
    const max = 9;
    return [Math.floor(Math.random() * max), Math.floor(Math.random() * max)]
};

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};
