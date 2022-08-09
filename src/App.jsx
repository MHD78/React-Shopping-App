import { useState } from "react";
import ProductsContextContext from "./context/ProductsContext";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import FilterProducts from "./components/FilterProducts";
import LoadMore from "./components/LoadMore";
import ChangeTheme from "./components/ChangeTheme";
import UserTheme from "./context/UserTheme";

function App() {
  const [filter, setFilter] = useState();
  const [sort, setSort] = useState("low");
  const [status, setStatus] = useState("close");

  return (
    <div
      className={`bg-gray-200 dark:bg-zinc-800 min-w-full min-h-screen m-auto`}
    >
      <ProductsContextContext>
        <UserTheme>
          <Header />
          <div className="max-w-7xl grid grid-cols-12 m-auto">
            <FilterProducts
              setStatus={setStatus}
              status={status}
              sort={sort}
              filter={filter}
              setFilter={setFilter}
            />
            <ProductsList setStatus={setStatus} setSort={setSort} />
          </div>
          <LoadMore sort={sort} filter={filter} setFilter={setFilter} />
        </UserTheme>
      </ProductsContextContext>
    </div>
  );
}

export default App;
