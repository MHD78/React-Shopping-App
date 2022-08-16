import { createContext, useContext, useReducer } from "react";

const ProductsContext = createContext();
const ProductsContextDispatcher = createContext();
let initialValue = [];
let initial = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "payload":
      state = action.data;
      initial = action.data;
      return state;
    case "reset":
      state = initial;
      return state;

    case "filterByCategory":
      if (action.value === "All") {
        state = initial;
        return initial;
      }
      state = initial.filter((item) => item.category.name === action.value);
      return state;

    case "filterByPrice":
      if (action.value === "All") {
        return state;
      } else if (action.value === "Under 100$") {
        return state.filter((item) => item.price <= 100);
      } else if (action.value === "100$ - 200$") {
        return state.filter((item) => item.price >= 100 && item.price < 200);
      } else if (action.value === "200$ - 500$") {
        return state.filter((item) => item.price >= 200 && item.price < 500);
      } else if (action.value === "500$ - 1000$") {
        return state.filter((item) => item.price >= 500 && item.price <= 1000);
      } else {
        return state.filter((item) => item.price > 1000);
      }
    case "filterBySearch":
      return state.filter((item) =>
        item.title.toLowerCase().includes(action.value.toLowerCase())
      );
    case "sort":
      if (action.value === "low") {
        state = [...state.sort((a, b) => a.price - b.price)];
        return state;
      } else if (action.value === "none") {
        return state;
      }
      state = [...state.sort((a, b) => b.price - a.price)];
      return state;
    default:
      console.log("adfasdasdasdasdadad");
  }
};
const ProductsContextContext = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialValue);

  return (
    <ProductsContext.Provider value={cart}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsContextContext;

export const useProducts = () => useContext(ProductsContext);
export const useProductsDispatcher = () =>
  useContext(ProductsContextDispatcher);
