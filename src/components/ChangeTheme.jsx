import { BsSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
const ChangeTheme = ({ theme, userTheme }) => {
  return (
    <button
      className="bg-orange-500 text-white sticky p-2 rounded-full text-lg bottom-2 left-1"
      onClick={() =>
        theme === "dark" ? userTheme("bright") : userTheme("dark")
      }
    >
      {theme === "dark" ? <BsFillMoonFill /> : <BsSunFill />}
    </button>
  );
};

export default ChangeTheme;
