import { useState } from "react";
import Page from "../components/Page";

export interface IsDarkProps {
  isDark: boolean;
  setIsDark?: (isDark: boolean) => void;
}

const UseContextEx1 = () => {
  const [isDark, setIsDark] = useState(false);

  return <Page isDark={isDark} setIsDark={setIsDark} />;
};

export default UseContextEx1;
