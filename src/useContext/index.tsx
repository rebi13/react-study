import { useState } from "react";
import "./useContext.css";
import Page from "./components/Page";
// import { stateProps } from "./context/ThemeContext";

const UseContext = () => {
  // 페이지가 다크모드인지 아닌지를 상태로 관리
  const [isDark, setIsDark] = useState<boolean>(false);

  return <Page isDark={isDark} setIsDark={setIsDark} />;
};

export default UseContext;
