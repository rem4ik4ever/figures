import React, { createContext, useContext, useReducer } from "react";
import { getActions } from "./actions";
import { reducer, initialState } from "./reducer";
import ISquare from './interfaces'

interface IDrawContext {
  state: {
    square?: ISquare
  }
  randomSquare: () => void
}
const DrawContextDefault: IDrawContext = {
  state: {},
  randomSquare: () => {}
}
const DrawingContext = createContext<IDrawContext>(DrawContextDefault);

const DrawProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = getActions(dispatch);
  const value = { state, ...actions };
  return (
    <DrawingContext.Provider value={value}>{children}</DrawingContext.Provider>
  );
};

function useDraw():IDrawContext {
  const context = useContext(DrawingContext);
  if (context === undefined) {
    throw new Error("useDraw can only be used within DrawProvider");
  }
  return context;
}

export { DrawProvider, useDraw };
