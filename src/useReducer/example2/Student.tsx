import { ACTION_TYPES } from ".";

interface StudentProps {
  name: string;
  dispatch: any;
  id: number;
  isHere: boolean;
}
const Student = ({ name, dispatch, id, isHere }: StudentProps) => {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
        }}
        onClick={() => {
          dispatch({ type: ACTION_TYPES.MARK_STUDENT, payload: { id } });
        }}
      >
        {name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.DELETE_STUDENT, payload: { id } });
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default Student;
