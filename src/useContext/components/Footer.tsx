import { stateProps } from "..";

const Footer: React.FC<stateProps> = ({ isDark, setIsDark }) => {
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
