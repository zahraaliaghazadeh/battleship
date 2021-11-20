import { Ships } from "../Components/Constants/Ships";

export default function getMaxHits() {
    let maxHits = 0;
    Ships.forEach((ship) => {
      maxHits += ship.hitPoints;
    });
    return maxHits
  };

  