import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { IsDarkProps } from "../example1";

const Page = ({ isDark, setIsDark }: IsDarkProps) => {
  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;
