import { Dispatch, SetStateAction, createContext } from "react";

export interface ThemeContextProps {
  isDark: boolean;
  setIsDark?: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
});
