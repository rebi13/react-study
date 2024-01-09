import { stateProps } from "..";

const Footer = ({ isDark, setIsDark }: stateProps) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundClip: isDark ? "black" : "lightgray",
      }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
};

export default Footer;
