import { Dispatch, useReducer, useState } from "react";
import Student from "./Student";

type State = {
  count: number;
  students: { id: number; name: string; isHere: boolean }[];
};

type Action = {
  type: "add-student" | "delete-student" | "mark-student"; // 문자열 리터럴 유니온 사용
  payload: {
    id?: number;
    name: string;
  }; // 페이로드는 선택 사항이며 필요에 따라 조정할 수 있습니다.
};

const reducer = (state: State, action: Action): State => {
  // 이상한 action을 보내면 아무 일이 발생하지 않고 기존 state만 반환해줌
  const actions = {
    "add-student": () => {
      const name = action.payload.name;
      const newStudent = { id: Date.now(), name, isHere: true };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    },
    "delete-student": () => ({
      count: state.count - 1,
      students: state.students.filter(
        (student) => student.id !== action.payload.id
      ),
    }),
    "mark-student": () => ({
      count: state.count,
      students: state.students.map((student) => {
        if (student.id === action.payload.id) {
          return { ...student, isHere: !student.isHere };
        }
        return student;
      }),
    }),
    default: () => state, // default를 바라보기 전에 이미 컴파일 시점에서 타입 에러를 반환한다.
  };
  return actions[action.type]() || actions.default();
};

const initialState: State = {
  count: 0,
  students: [],
};

const UseReducerEx2 = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch]: [State, Dispatch<Action>] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "add-student", payload: { name } })}
      >
        추가
      </button>
      {studentsInfo.students.map((student) => {
        return (
          <Student
            key={student.id.toString()}
            name={student.name}
            dispatch={dispatch}
            id={student.id}
            isHere={student.isHere}
          />
        );
      })}
    </div>
  );
};

export default UseReducerEx2;
