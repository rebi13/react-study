import { IsDarkProps } from "../example1";

const Footer = ({ isDark, setIsDark }: IsDarkProps) => {
  const toggleTheme = () => {
    setIsDark && setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
