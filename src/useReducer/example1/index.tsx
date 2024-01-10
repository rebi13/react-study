import { useState, useReducer, Dispatch } from "react";

// 상태와 액션에 대한 타입 정의
type State = number;

type Action = {
  type: "deposit" | "withdraw"; // 문자열 리터럴 유니온 사용
  payload: number; // 페이로드는 선택 사항이며 필요에 따라 조정할 수 있습니다.
};

const ACTION_TYPES = {
  DEPOSIT: "deposit" as const,
  WITHDRAW: "withdraw" as const,
};
// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용
// 현재 state / action
const reducer = (state: State, action: Action): State => {
  // : State
  console.log("reducer가 일을 합니다!", state, action);
  // action을 토대로 state가 변경된다.

  // useReducer의 장점 리듀서는 전달받은 action대로만 state를 업데이트해준다.
  // 이상한 action을 보내면 아무 일이 발생하지 않고 기존 state만 반환해줌
  const actions = {
    deposit: state + action.payload,
    withdraw: state - action.payload,
    default: state, // default를 바라보기 전에 이미 컴파일 시점에서 타입 에러를 반환한다.
  };
  return actions[action.type] || actions.default;
};
// state안에는 reducer함수가 불리는 시점에 money state 안에 들어있는 값이 들어감
// action은 우리가 reducer에게 state를 변경해달라고 요구할때 요구에 대한 내용이 들어감
const UseReducerEx1 = () => {
  const [number, setNumber] = useState(0);
  // 상태 money, dispatch 함수
  // money state는 우리가 만든 reducer 함수에 의해서만 변경된다. 수정하고 싶을때는 dispatch를 사용한다.
  const [money, dispatch]: [State, Dispatch<Action>] = useReducer(reducer, 0); // reducer, money의 초기값

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.DEPOSIT, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.WITHDRAW, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
};

export default UseReducerEx1;
