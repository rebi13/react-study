import { stateProps } from "..";

const Content = ({ isDark }: stateProps) => {
  return (
    <div
      className="content"
      style={{
        backgroundClip: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <p>홍길동님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;
