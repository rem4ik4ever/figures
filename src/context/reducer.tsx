import { v4 as uuidv4 } from "uuid";
import { RANDOM_SQUARE } from "./actions";
import ISquare, {IDrawAction, IProp} from "./interfaces";

const MAX_HEIGHT = 400;
const MAX_WIDTH = 400;

const setProp = (prop:IProp, existing:IProp={label: '', display: '', value: ''}):IProp => {
  return {
    ...existing,
    ...prop
  }
}

interface IDrawState {
  square: ISquare
}

const defaultSquare: ISquare = {
  id: setProp({label: "ID", display: '', value: uuidv4()}),
  ry: setProp({label: "RY", display: '0', value: 0}),
  rx: setProp({label: "RX", display: '0', value: 0}),
  x: setProp({label: "x", display: '0', value: 0}),
  y: setProp({label: "y", display: '0', value: 0}),
  width: setProp({label: "width", display: '0', value: 0}),
  height: setProp({label: "height", display: '0', value: 0}),
  fill: setProp({label: "fill", display: 'black', value: 'black'}),
};

const random = (range: number, offset: number = 0) =>
  Math.round(Math.random() * range + offset);

const randomColor = () => `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

const randomizeSquare = ():ISquare => {
  const side:number = random(MAX_HEIGHT, 1);
  const round:number = random(20);
  const color:string = randomColor();
  return {
    ...defaultSquare,
    width: setProp({display: `${side}px`, value: side}, defaultSquare.width),
    height: setProp({display: `${side}px`, value: side}, defaultSquare.height),
    rx: setProp({display: `${round}%`, value: round}, defaultSquare.rx),
    ry: setProp({display: `${round}%`, value: round}, defaultSquare.ry),
    fill: setProp({display: color, value: color}, defaultSquare.ry),
  };
};


export const initialState: IDrawState = {
  square: randomizeSquare() 
};

export function reducer(state: IDrawState, action: IDrawAction) {
  const { type } = action;
  switch (type) {
    case RANDOM_SQUARE:
      return {
        ...state,
        square: randomizeSquare()
      };
    default:
      return state;
  }
}
