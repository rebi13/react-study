import { IsDarkProps } from "../example1";

const Content = ({ isDark }: IsDarkProps) => {
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <p>사용자님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;
