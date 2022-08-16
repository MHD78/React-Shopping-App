import ProductCard from "./ProductCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductsSkeleton = () => {
  const size = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const skeleton = {
    title: <Skeleton />,
    description: <Skeleton count={3} />,
    price: <Skeleton />,
    images: <Skeleton height={140} width={150} />,
  };
  return (
    <div className=" p-4 gap-4 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 ">
      {size.map((product) => {
        return <ProductCard key={product} assets={skeleton} />;
      })}
    </div>
  );
};

export default ProductsSkeleton;
