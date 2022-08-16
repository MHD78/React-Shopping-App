import { useState } from "react";
import ProductsContextContext from "./context/ProductsContext";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import FilterProducts from "./components/FilterProducts";
import UserTheme from "./context/UserTheme";
import Pagination from "./components/Pagination";
import UserFilters from "./context/UserFilters";

function App() {
  const [status, setStatus] = useState("close");

  return (
    <div
      className={`bg-gray-200 dark:bg-zinc-800 min-w-full min-h-screen m-auto`}
    >
      <ProductsContextContext>
        <UserTheme>
          <UserFilters>
            <Header />
            <div className="max-w-7xl grid grid-cols-12 m-auto">
              <FilterProducts setStatus={setStatus} status={status} />
              <ProductsList setStatus={setStatus} />
            </div>
            <Pagination />
          </UserFilters>
        </UserTheme>
      </ProductsContextContext>
    </div>
  );
}

export default App;
