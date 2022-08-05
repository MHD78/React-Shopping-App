import { TbAdjustmentsHorizontal } from "react-icons/tb";
const SortProducts = ({ setStatus, setSort, productsCount, dispatch }) => {
  return (
    <div className="relative text-xs md:text-base bg-gray-50 dark:bg-zinc-600 flex justify-between items-center text-black dark:text-gray-50 rounded-lg  mt-4 p-2  mx-4">
      <div>
        <label for="sort">Sort By :</label>
        <select
          className="bg-gray-200 text-black dark:bg-zinc-500 rounded-lg p-1.5 dark:text-white font-semibold outline-none  ml-2"
          name="sort"
          onChange={(e) => {
            dispatch({ type: "sort", value: e.target.value });
            setSort(e.target.value);
          }}
        >
          {/* <option value="none">none</option> */}
          <option value="low">Price-low to high</option>
          <option value="high">Price-high to low</option>
        </select>
      </div>
      <TbAdjustmentsHorizontal
        onClick={() => setStatus("open")}
        className="text-xl lg:invisible"
      />
      <span className="font-semibold lg:visible invisible absolute right-5">
        {productsCount} Products
      </span>
    </div>
  );
};

export default SortProducts;
