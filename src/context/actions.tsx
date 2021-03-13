export const ADD_FIGURE = "ADD_FIGURE";
export const RANDOM_SQUARE = "RANDOM_SQUARE";

export function getActions(dispatch:any) {
  return {
    randomSquare() {
      dispatch({ type: RANDOM_SQUARE });
    }
  };
}
