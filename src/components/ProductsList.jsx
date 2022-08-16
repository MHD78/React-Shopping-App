import ProductCard from "./ProductCard";
import { useProducts } from "../context/ProductsContext";
import SortProducts from "./SortProducts";
import ProductsSkeleton from "./ProductsSkeleton";

const ProductsList = ({ setStatus }) => {
  const products = useProducts();

  return (
    <div className=" col-span-full sm:col-span-12 lg:col-span-10 w-full ">
      <SortProducts setStatus={setStatus} />
      {products.length === 0 ? (
        <ProductsSkeleton />
      ) : (
        <div className=" p-4 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {products.map((product) => {
            return <ProductCard key={product} assets={product} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
