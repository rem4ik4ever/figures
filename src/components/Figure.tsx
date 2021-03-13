import { useDraw } from "../context";
import { propsToValues } from "./helpers";

/*
1. Draw random square
*/
const Figure = () => {
  const { state: {square} } = useDraw();
  console.log(square);
  return (
    <svg width="400" height="400">
      <rect {...propsToValues(square)} />
    </svg>
  );
};

export default Figure;
