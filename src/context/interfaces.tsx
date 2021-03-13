export interface IProp {
  label?: string
  value: string|number
  display: string|number
}

export interface IDrawState {
  square?: ISquare
}

export interface IDrawAction {
  type: string
  payload?: any
}

interface ISquare {
  id: IProp
  ry: IProp,
  rx: IProp,
  x: IProp,
  y: IProp,
  width: IProp,
  height: IProp,
  fill: IProp
}

export default ISquare;