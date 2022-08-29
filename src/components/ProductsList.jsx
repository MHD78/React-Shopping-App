import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductsContext";
import SortProducts from "./SortProducts";
import ProductsSkeleton from "./ProductsSkeleton";
import { useUserFilter } from "../context/UserFilters";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsList = ({ setStatus }) => {
  const [length, setLength] = useState(0);
  const products = useProducts();
  const filters = useUserFilter();
  useEffect(() => {
    setLength(products.length);
  }, [products]);

  const render = () => {
    if (filters.status === "fetching") {
      return <ProductsSkeleton />;
    } else if (filters.status === "fetched" && length === 0) {
      return (
        <div className="w-fit mx-auto flex flex-col items-center justify-self-center my-28 bg-white p-3 rounded-lg dark:bg-gray-200 dark:shadow-none shadow-gray-300 shadow-2xl  ">
          <img
            src="https://www.digikala.com/statics/img/svg/plp/404.svg"
            alt="not-found"
          />
          <h1 className="text-lg font-semibold ">Oops! Nothing Found</h1>
          <p>please try another category or search for somthing else.</p>
        </div>
      );
    } else {
      return (
        <div className=" p-4 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {products.map((product) => {
            return (
              <Link to={`/products/${product.id}`}>
                <ProductCard key={product} assets={product} />
              </Link>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className=" col-span-full sm:col-span-12 lg:col-span-10 w-full ">
      <SortProducts setStatus={setStatus} />
      {render()}
    </div>
  );
};

export default ProductsList;
