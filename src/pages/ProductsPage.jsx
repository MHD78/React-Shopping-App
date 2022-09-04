import FilterProducts from "../components/FilterProducts";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import { useProductsDispatcher } from "../context/ProductsContext";
import queryString from "query-string";
import getAllProds from "../services/getAllProductsService";
import getProdsByCategory from "../services/getProdsByCategory";
import ProductsSkeleton from "../components/ProductsSkeleton";
import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SortProducts from "../components/SortProducts";

const ProductsPage = ({ location }) => {
  const products = useProducts();
  const pageNumber = +location.pathname.split("/")[3];
  const dispatch = useProductsDispatcher();
  const query = queryString.parse(location.search);
  const [status, setStatus] = useState("close");
  const [render, setRender] = useState("skeleton");

  const renderHandler = () => {
    if (render === "skeleton") return <ProductsSkeleton />;
    else if (render === "nothing") {
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
    } else
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
  };

  useEffect(() => {
    setRender("skeleton");
    if (query.category === "0") {
      getAllProds((pageNumber - 1) * 20, 20).then((response) => {
        dispatch({ type: "payload", data: response.data });
        dispatch({ type: "filterByPrice", value: query.price });
      });
    } else {
      getProdsByCategory(query.category, (pageNumber - 1) * 20, 20).then(
        (response) => {
          dispatch({ type: "payload", data: response.data });
          dispatch({ type: "filterByPrice", value: query.price });
        }
      );
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  useEffect(() => {
    if (products.length === 0) setRender("nothing");
    else setRender("content");
  }, [products]);

  return (
    <>
      <div className="max-w-7xl grid grid-cols-12 m-auto">
        <FilterProducts setStatus={setStatus} status={status} />
        <div className=" col-span-full sm:col-span-12 lg:col-span-10 w-full ">
          <SortProducts setStatus={setStatus} />
          {renderHandler()}
        </div>
      </div>
      <Pagination category={query.category} />
    </>
  );
};

export default ProductsPage;
