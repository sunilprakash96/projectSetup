import { useState } from "react";
export const UseSetState = (initialState: any) => {
  const [state, setState] = useState(initialState);
  const newSetState = (newState: object) => {
    setState((prevState: any) => ({ ...prevState, ...newState }))
  }
  return [state, newSetState];
}