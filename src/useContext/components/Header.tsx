import { stateProps } from "..";

const Header = ({ isDark }: stateProps) => {
  return (
    <header
      className="header"
      style={{
        backgroundClip: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  );
};

export default Header;
