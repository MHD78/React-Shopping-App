import FilterProducts from "../components/FilterProducts";
import ProductsList from "../components/ProductsList";
import Pagination from "../components/Pagination";
import { useState } from "react";

const HomePage = () => {
  const [status, setStatus] = useState("close");
  return (
    <>
      <div className="max-w-7xl grid grid-cols-12 m-auto">
        <FilterProducts setStatus={setStatus} status={status} />
        <ProductsList setStatus={setStatus} />
      </div>
      <Pagination />
    </>
  );
};

export default HomePage;
