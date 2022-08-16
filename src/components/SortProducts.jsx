import ChangeTheme from "./ChangeTheme";
import { useUserFilter, useUserFilterDispatch } from "../context/UserFilters";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
const SortProducts = ({ setStatus }) => {
  const filters = useUserFilter();
  const filterDispatch = useUserFilterDispatch();
  return (
    <div className="relative text-xs md:text-base bg-gray-50 dark:bg-zinc-600 flex justify-between items-center text-black dark:text-gray-50 rounded-lg  mt-4 p-2  mx-4">
      <div>
        <label for="sort">Sort By :</label>
        <select
          className="bg-gray-200 text-black dark:bg-zinc-500 rounded-lg p-1.5 dark:text-white font-semibold outline-none  ml-2"
          name="sort"
          onChange={(e) => {
            filterDispatch({ ...filters, sort: e.target.value });
          }}
        >
          {/* <option value="none">none</option> */}
          <option value="low">Price-low to high</option>
          <option value="high">Price-high to low</option>
        </select>
      </div>
      <div className="flex items-center gap-3">
        <ChangeTheme />
        <TbAdjustmentsHorizontal
          onClick={() => setStatus("open")}
          className="text-xl lg:hidden"
        />
      </div>
    </div>
  );
};

export default SortProducts;
