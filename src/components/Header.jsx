import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserCart } from "../context/UserCartContext";
const Header = () => {
  const cart = useUserCart();

  return (
    <header className=" mb-5 bg-zinc-800  dark:bg-[#0e0d29]  backdrop-blur-3xl  py-4 w-full font-semibold text-white mx-auto md:text-2xl ">
      <div className="max-w-7xl m-auto flex items-center justify-between px-4 ">
        <Link to={"/"}>
          <span className="flex items-center gap-2">
            <FaReact className="animate-spin-slow  text-orange-400" />
            <h2 className="text-[#da7d26]">React Shop</h2>
          </span>
        </Link>
        <span className="flex items-center gap-2">
          <span className="relative p-2 max-w-5xl">
            <Link to={"/cart"}>
              <BsCart2 />
              <span className="bg-red-500 text-white rounded-full text-xs px-1 absolute right-0 top-0">
                {cart.length}
              </span>
            </Link>
          </span>

          <AiOutlineUser />
        </span>
      </div>
    </header>
  );
};

export default Header;
