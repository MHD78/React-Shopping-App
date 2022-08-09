import { useState, useEffect, createContext, useContext } from "react";

const ChosenTheme = createContext();
const UserThemeDispatcher = createContext();

const UserTheme = ({ children }) => {
  const [theme, setTheme] = useState("bright");
  useEffect(() => {
    document.getElementById("root").className = theme;
  }, [theme]);

  return (
    <ChosenTheme.Provider value={theme}>
      <UserThemeDispatcher.Provider value={setTheme}>
        {children}
      </UserThemeDispatcher.Provider>
    </ChosenTheme.Provider>
  );
};

export default UserTheme;

export const useTheme = () => useContext(ChosenTheme);
export const useThemeDispatcher = () => useContext(UserThemeDispatcher);
