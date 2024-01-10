import { stateProps } from "../context/ThemeContext";

const Header: React.FC<stateProps> = ({ isDark }) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동!</h1>
    </header>
  );
};

export default Header;
