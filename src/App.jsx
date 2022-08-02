import { useState } from "react";
import ProductsContextContext from "./context/userCartContext";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import FilterProducts from "./components/FilterProducts";
import LoadMore from "./components/LoadMore";

function App() {
  const [filter, setfilter] = useState();
  const [sort, setSort] = useState("none");
  const [status, setStatus] = useState("close");
  return (
    <div className=" bg-gray-200 dark:bg-zinc-800 min-w-full min-h-screen m-auto">
      <ProductsContextContext>
        <Header />
        <div className="max-w-7xl grid grid-cols-12 m-auto">
          <FilterProducts
            setStatus={setStatus}
            status={status}
            sort={sort}
            filter={filter}
            setfilter={setfilter}
          />
          <ProductsList setStatus={setStatus} setSort={setSort} />
        </div>
        <LoadMore sort={sort} filter={filter} setfilter={setfilter} />
      </ProductsContextContext>
    </div>
  );
}

export default App;
