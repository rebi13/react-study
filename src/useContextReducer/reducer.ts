import { createContext } from "react";

export const indexInitialState = {
  text: "기본값",
  count: 0,
};

export const IndexContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: indexInitialState, dispatch: () => {} });

type State = {
  text: string;
  count: number;
};

type Action =
  | {
      type: "changeToKor" | "changeToEng";
      payload?: { text: string };
    }
  | {
      type: "minusCount" | "plusCount";
      payload?: {
        text: string;
        count: number;
      };
    }; // 문자열 리터럴 유니온 사용

export const indexReducer = (state: State, action: Action) => {
  const actions = {
    changeToKor: () => {
      return {
        ...state,
        text: "안녕하세요",
      };
    },
    changeToEng: () => {
      return {
        ...state,
        text: "hello",
      };
    },
    minusCount: () => {
      return {
        ...state,
        count: state.count - 1,
      };
    },
    plusCount: () => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    default: () => {
      return state;
    },
  };

  return actions[action.type]() || actions.default();
};
