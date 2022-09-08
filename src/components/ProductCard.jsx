const ProductCard = ({ assets }) => {
  return (
    <div className="h-full  snap-center  bg-gray-50 dark:bg-zinc-600 dark:text-gray-50 rounded-lg flex flex-col justify-around items-center p-3 gap-4 group ">
      {assets.images.length !== 3 ? (
        assets.images
      ) : (
        <img
          src={assets.images[0]}
          className="w-full self-center group-hover:shadow-2xl group-hover:shadow-black/20 dark:shadow-none  h-fit rounded-lg transition-all duration-200 transform group-hover:scale-105"
        />
      )}
      <div className="w-full">
        <h2 className="text-sm font-semibold sm:text-base">{assets.title}</h2>
        <p className="text-left text-xs sm:text-sm cursor-pointer mt-1">
          {typeof assets.description === "string"
            ? assets.description.slice(0, 60) + "..."
            : assets.description}
        </p>
        <span className=" flex justify-between items-center  w-full  font-semibold mt-4">
          <span>{assets.price}$</span>
          <button className="bg-primary hover:bg-hoverPrimary transition-colors text-sm md:text-base lg:text-lg text-gray-700 font-mono font-bold rounded-lg px-6 py-0.5  self-end ">
            Buy
          </button>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
