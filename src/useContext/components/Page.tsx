import { stateProps } from "../context/ThemeContext";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ isDark, setIsDark }: stateProps) => {
  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;
