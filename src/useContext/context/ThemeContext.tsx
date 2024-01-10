import { Dispatch, SetStateAction, createContext } from "react";

export interface stateProps {
  isDark: boolean;
  setIsDark?: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<stateProps>({
  isDark: false,
});
