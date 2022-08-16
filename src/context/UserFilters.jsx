import { useContext } from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { useProductsDispatcher } from "./ProductsContext";

const UserFilter = createContext();
const UserFilterDispatcher = createContext();

const UserFilters = ({ children }) => {
  const dispatch = useProductsDispatcher();
  const [filter, setFilter] = useState({
    update: false,
    search: "",
    sort: "low",
    price: "All",
    category: "All",
    categoryID: 0,
  });
  useEffect(() => {
    dispatch({ type: "filterByCategory", value: filter.category });
    dispatch({ type: "filterByPrice", value: filter.price });
    dispatch({ type: "filterBySearch", value: filter.search });
    dispatch({ type: "sort", value: filter.sort });
  }, [filter, filter.update]);

  return (
    <UserFilter.Provider value={filter}>
      <UserFilterDispatcher.Provider value={setFilter}>
        {children}
      </UserFilterDispatcher.Provider>
    </UserFilter.Provider>
  );
};

export default UserFilters;

export const useUserFilter = () => useContext(UserFilter);
export const useUserFilterDispatch = () => useContext(UserFilterDispatcher);
