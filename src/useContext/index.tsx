import { Dispatch, SetStateAction, useState } from "react";
import "./useContext.css";
import Page from "./components/Page";

export interface stateProps {
  isDark: boolean;
  setIsDark?: Dispatch<SetStateAction<boolean>>;
}

const UseContext = () => {
  // 페이지가 다크모드인지 아닌지를 상태로 관리
  const [isDark, setIsDark] = useState<boolean>(false);

  return <Page isDark={isDark} setIsDark={setIsDark} />;
};

export default UseContext;
