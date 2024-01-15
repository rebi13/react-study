import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = () => {
  const data = useContext(ThemeContext);
  console.log("data : ", data);
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
