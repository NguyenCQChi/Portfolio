import { useEffect, useState } from "react";

const usePreviousState = (initialState, state) => {
  const [ stateTuple, setStateTuple ] = useState([initialState, state]);

  useEffect(() => {
    setStateTuple((prevState) => [prevState[1], state]);
  }, [state])

  const prevState = stateTuple[0]

  return prevState;
}

export default usePreviousState;