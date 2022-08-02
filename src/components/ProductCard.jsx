import { useState } from "react";
const ProductCard = ({ assets, dispatch }) => {
  const [image, setImage] = useState(0);
  const [desc, setDesc] = useState(assets.description.slice(0, 50) + "...");
  return (
    <div
      onMouseEnter={() => setImage(1)}
      onMouseLeave={() => setImage(0)}
      className="h-full bg-gray-50 dark:bg-zinc-600 dark:text-gray-50 rounded-lg flex flex-col justify-around items-center p-3 gap-4 group "
    >
      <img
        src={assets.images[image]}
        className="rounded-lg transition-all duration-200 transform group-hover:scale-105"
      />
      <h2 className="text-sm font-semibold sm:text-base">{assets.title}</h2>
      <p
        className="text-left text-xs sm:text-sm cursor-pointer"
        onClick={() =>
          desc.length === 53
            ? setDesc(assets.description)
            : setDesc(assets.description.slice(0, 50) + "...")
        }
      >
        {desc}
      </p>
      <span className="flex justify-between items-center  w-full  font-semibold">
        <span>{assets.price}$</span>
        <button className="bg-indigo-500 hover:bg-indigo-700 dark:bg-[#da7d26] dark:hover:bg-[#d36600] transition-colors text-md lg:text-lg text-white font-mono font-bold rounded-lg px-3 py-0.5  self-end ">
          Buy!
        </button>
      </span>
    </div>
  );
};

export default ProductCard;
