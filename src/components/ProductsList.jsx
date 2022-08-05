import ProductCard from "./ProductCard";
import { useProducts, useProductsDispatcher } from "../context/ProductsContext";
import SortProducts from "./SortProducts";
const ProductsList = ({ setStatus, setSort }) => {
  const products = useProducts();
  const productsDispatcher = useProductsDispatcher();
  //   console.log(products);
  return (
    <div className=" col-span-full sm:col-span-12 lg:col-span-10 w-full ">
      <SortProducts
        setStatus={setStatus}
        setSort={setSort}
        dispatch={productsDispatcher}
        productsCount={products.length}
      />
      <div className=" p-4 gap-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              assets={product}
              dispatch={productsDispatcher}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
