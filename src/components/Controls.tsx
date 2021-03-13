import { useDraw } from "../context";

const Controls = () => {
  const { randomSquare } = useDraw();

  return (
    <div>
      <button onClick={randomSquare}>Randomize Square</button>
      <label>
        Width
        <input type="range" min="1" max="400" value="" />
      </label>
    </div>
  );
};

export default Controls;
