import React from "react";
import Board from "./Board";
import { ShipTypes } from "./ShipTypes";

// import { Col } from 'react-bootstrap';
// import ShipTypes from "./ShipTypes";
// import {fleet} from './generateShips'

export default function playGame(props) {
  let { fleet, hits, onCellClick, onClick } = props;

 
  function fire(guess) {
    for (var i = 0; i < ShipTypes.length; i++) {
      var ship = this.shipTypes[i];
      var index = ship.position.indexOf(guess);

      if (ship.position[index] === "hit") {
        console.log("Position has already been hit!");
        return true;
      } else if (index >= 0) {
        ship.position[index] = "hit";
        console.log(guess);
        console.log("HIT!");

        if (this.isSunk(ship)) {
          console.log("You sank my (shipType.name}!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    console.log(guess);
    console.log("You missed.");
    return false;
  }

  return (
    <div>
      <Board />
    </div>
  );
}
