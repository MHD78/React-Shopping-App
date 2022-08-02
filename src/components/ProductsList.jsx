import ProductCard from "./ProductCard";
import {
  useProducts,
  useProductsDispatcher,
} from "../context/userCartContext";
import SortProducts from "./SortProducts";
const ProductsList = ({ setStatus, setSort }) => {
  const products = useProducts();
  const productsDispatcher = useProductsDispatcher();
  //   console.log(products);
  return (
    <div className=" col-span-full lg:col-span-10 w-full ">
      <SortProducts
        setStatus={setStatus}
        setSort={setSort}
        dispatch={productsDispatcher}
      />
      <div className=" p-4 gap-4 grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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