import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import getProdsByCategory from "../services/getProdsByCategory";
import ProductCard from "./ProductCard";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const SimilarProducts = ({ category }) => {
  const test = useRef();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProdsByCategory(category, 0, 15).then(res => setProducts(res.data));
    console.log(category);
    test.current.scrollIntoView({ behavior: "smooth" });
  }, [category, test]);
  const scroll = value => {
    test.current.scrollLeft += value;
  };
  return (
    <div className="relative border-t-2">
      <h2 className="m-8 text-center text-xl font-semibold">
        Similar Products
      </h2>
      <AiOutlineLeft
        onClick={() => scroll(-200)}
        className="absolute text-xl sm:text-2xl rounded-full p-1.5 font-bold box-content bg-orange-400 text-white left-0 top-1/2 m-2 cursor-pointer  z-10 "
      />
      <div
        ref={test}
        className="no-scrollbar  flex gap-4 overflow-x-scroll rounded-b-lg bg-gray-300 p-4 snap-x scroll-smooth "
      >
        {products.map(product => {
          return (
            <Link
              className="min-w-[230px]"
              to={`/products/${product.id}`}
              target="_blank"
            >
              <ProductCard assets={product} />
            </Link>
          );
        })}
      </div>
      <AiOutlineRight
        onClick={() => scroll(+200)}
        className="absolute text-xl sm:text-2xl rounded-full p-1.5 font-bold box-content bg-orange-400 text-white right-0 top-1/2 z-10 m-2 cursor-pointer"
      />
    </div>
  );
};

export default SimilarProducts;
