import { useState } from "react";
const ProductCard = ({ assets, dispatch }) => {
  const [image, setImage] = useState(0);
  const [desc, setDesc] = useState(assets.description.slice(0, 50) + "...");
  return (
    <div
      onMouseEnter={() => setImage(1)}
      onMouseLeave={() => setImage(0)}
      className="h-full  bg-gray-50 dark:bg-zinc-600 dark:text-gray-50 rounded-lg flex sm:flex-col justify-around items-center p-3 gap-4 group "
    >
      <img
        src={assets.images[image]}
        className="w-28 self-center sm:w-full h-fit rounded-lg transition-all duration-200 transform group-hover:scale-105"
      />
      <div>
        <h2 className="text-sm font-semibold sm:text-base">{assets.title}</h2>
        <p
          className="text-left text-xs sm:text-sm cursor-pointer mt-1"
          onClick={() =>
            desc.length === 53
              ? setDesc(assets.description)
              : setDesc(assets.description.slice(0, 50) + "...")
          }
        >
          {desc}
        </p>
        <span className=" flex justify-between items-center  w-full  font-semibold mt-4">
          <span>{assets.price}$</span>
          <button className="bg-[#ff8b1f] hover:bg-[#d36600] transition-colors text-sm md:text-base lg:text-lg text-white font-mono font-bold rounded-lg px-3 py-0.5  self-end ">
            Buy
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
