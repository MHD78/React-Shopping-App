import { useTheme, useThemeDispatcher } from "../context/UserTheme";

import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
const ChangeTheme = () => {
  const theme = useTheme();
  const themeDispatch = useThemeDispatcher();
  return (
    <button
      // className="bg-orange-500 text-white w-fit lg:absolute sticky p-2 rounded-full text-lg bottom-2 left-1"
      onClick={() =>
        theme === "dark" ? themeDispatch("bright") : themeDispatch("dark")
      }
    >
      {theme === "bright" ? (
        <BsFillMoonFill className="text-sm sm:text-lg" />
      ) : (
        <BsSunFill className="text-sm sm:text-lg" />
      )}
    </button>
  );
};

export default ChangeTheme;
