import { IsDarkProps } from "../example1";

const Header = ({ isDark }: IsDarkProps) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 사용자!</h1>
    </header>
  );
};

export default Header;
