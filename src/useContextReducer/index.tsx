import React, { useReducer, useContext } from "react";
import { IndexContext, indexReducer, indexInitialState } from "./reducer";

const TextButton = () => {
  const { state, dispatch } = useContext(IndexContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "changeToKor" })}>한글</button>
      <button onClick={() => dispatch({ type: "changeToEng" })}>English</button>
      <div>{state.text}</div>
    </div>
  );
};

const CountButton = () => {
  const { state, dispatch } = useContext(IndexContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "minusCount" })}>-</button>
      <button onClick={() => dispatch({ type: "plusCount" })}>+</button>
      <div>{state.count}</div>
    </div>
  );
};

const Box1 = () => {
  return (
    <div>
      <TextButton />
      <CountButton />
    </div>
  );
};

const UseContextReducer = () => {
  const [state, dispatch] = useReducer(indexReducer, indexInitialState);

  return (
    <div>
      <IndexContext.Provider value={{ state, dispatch }}>
        <Box1 />
      </IndexContext.Provider>
    </div>
  );
};

export default UseContextReducer;
