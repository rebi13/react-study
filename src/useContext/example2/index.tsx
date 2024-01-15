import { useState } from "react";
import "../useContext.css";
import Page from "./components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

const UseContextEx2 = () => {
  // 페이지가 다크모드인지 아닌지를 상태로 관리
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default UseContextEx2;
