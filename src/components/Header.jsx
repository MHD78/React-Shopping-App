import { useProducts } from "../context/ProductsContext";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  const items = useProducts();
  return (
    <header className=" mb-5 bg-zinc-800  dark:bg-[#0e0d29]  backdrop-blur-3xl  py-4 w-full font-semibold text-white mx-auto md:text-2xl ">
      <div className="max-w-7xl m-auto flex items-center justify-around ">
        <span className="relative p-2 max-w-5xl">
          <BsCart2 />
          <span className="bg-red-500 text-white rounded-full text-xs px-1 absolute right-0 top-0">
            {0}
          </span>
        </span>
        <h2 className="text-[#da7d26]">React Shop</h2>

        <AiOutlineUser />
      </div>
    </header>
  );
};

export default Header;
