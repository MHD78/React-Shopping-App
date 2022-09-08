import { useState, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import getSingleProduct from "../services/getSingleProduct";
import SimilarProducts from "./SimilarProducts";
import ReactTooltip from "react-tooltip";
import { useUserCart, useUserCartDispatcher } from "../context/UserCartContext";

const ProductDetail = props => {
  const dispatch = useUserCartDispatcher();
  const userCart = useUserCart();
  const [product, setProduct] = useState({
    images: [],
    category: { id: null },
  });

  const [detail, setDetail] = useState("DESCRIPTION");
  const [active, setActive] = useState(0);
  const [selectedColor, setColor] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    getSingleProduct(props.match.params.id).then(res => setProduct(res.data));
  }, []);

  const addToCart = () => {
    if (selectedColor === "") {
      toast.warning("Please select a color.", { autoClose: 3000 });
    } else {
      dispatch([
        ...userCart,
        {
          colorClass: "bg-" + selectedColor + "-300",
          id: props.match.params.id,
          color: selectedColor,
          quantity: count,
          title: product.title,
          image: product.images[0],
          price: product.price,
          suk: props.match.params.id + selectedColor,
        },
      ]);
      toast.success(`${product.title} added to your cart.`, {
        autoClose: 3000,
      });
    }
  };

  const colors = [
    { class: "bg-red-400", name: "red" },
    { class: "bg-green-400", name: "green" },
    { class: "bg-gray-800", name: "gray" },
    { class: "bg-yellow-400", name: "yellow" },
  ];
  return (
    <main className="w-full max-w-7xl  flex  flex-col justify-center mx-auto  bg-gray-50 dark:bg-zinc-600 dark:text-white rounded-lg my-12">
      <section className=" w-full flex justify-center md:flex-row flex-col mx-auto py-12 px-4 gap-2">
        <div className="  flex flex-col-reverse justify-between gap-y-2">
          <div className=" max-w-xl">
            <ul className="w-[320px]   flex">
              {product.length !== 0 &&
                product.images.map((image, index) => {
                  return (
                    <li
                      onClick={() => setActive(index)}
                      className={`${
                        active === index
                          ? "border-hoverPrimary border-b-2 transition-all duration-500"
                          : "border-zinc-300 border-b-2"
                      } pr-1 py-2 `}
                    >
                      <img src={image} className=" rounded-lg cursor-pointer" />
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className=" relative max-w-xl ">
            <img src={product.images[active]} className="rounded-lg" />
            <div className=" right-2 text-4xl font-bold text-primary">
              <AiOutlineLeft
                onClick={() => {
                  active >= 1 && setActive(prev => prev - 1);
                }}
                className="top-1/2 absolute cursor-pointer mb-2 hover:text-hoverPrimary"
              />
              <AiOutlineRight
                onClick={() => {
                  active < 2 && setActive(prev => prev + 1);
                }}
                className="top-1/2 absolute right-0 cursor-pointer hover:text-hoverPrimary"
              />
            </div>
          </div>
        </div>
        <div className=" max-w-xl sm:px-4 flex flex-col sm:justify-between sm:border-l-2">
          <h1 className="text-2xl font-semibold my-4 sm:my-0">
            {product.title}
          </h1>
          <p className="mb-4">{product.description}</p>
          <h2 className="text-2xl font-semibold mb-4">${product.price}</h2>

          <div className="mb-4 max-w-xl pt-3">
            <p className="mb-6 text-lg">SELECT COLOR</p>

            {colors.map(color => {
              return (
                <>
                  <span
                    data-tip={color.name}
                    onClick={() => setColor(color.name)}
                    className={`${color.class} ${
                      selectedColor === color.name &&
                      " outline outline-offset-2 outline-hoverPrimary outline-2 "
                    } cursor-pointer text-black rounded-full px-3 py-0.5 mr-3 `}
                  ></span>
                  <ReactTooltip
                    effect={"solid"}
                    className={"!p-2 !bg-gray-800"}
                  />
                </>
              );
            })}
          </div>
          <div className=" max-w-xl flex justify-between items-center  my-4 ">
            <h2 className="text-lg">QUANTITY : {count}</h2>
            <span className="flex gap-x-3">
              <AiOutlineMinus
                className={`${
                  count === 1 && "text-gray-400 cursor-not-allowed"
                } text-xl font-semibold cursor-pointer`}
                onClick={() => count > 1 && setCount(prev => prev - 1)}
              />
              <AiOutlinePlus
                className="text-xl font-semibold cursor-pointer"
                onClick={() => setCount(prev => prev + 1)}
              />
            </span>
          </div>
          {userCart.find(
            item =>
              item.id === props.match.params.id && item.color === selectedColor
          ) ? (
            <button className=" flex justify-center gap-2  items-center max-w-xl w-full text-gray-700 text-lg font-bold bg-hoverPrimary px-full py-2 rounded-lg">
              <Link className="w-full" to={"/cart"}>
                In Cart
              </Link>
            </button>
          ) : (
            <button
              onClick={() => addToCart()}
              className=" flex justify-center gap-2  items-center max-w-xl w-full text-gray-700 text-lg font-bold bg-primary hover:bg-hoverPrimary px-full py-2 rounded-lg"
            >
              ADD TO CART
              <BsFillCartPlusFill className="text-lg" />
            </button>
          )}
        </div>
      </section>
      <section className=" w-full mb-12 border-t-2">
        <ul className="flex justify-start ml-4">
          <li
            onClick={() => setDetail("DESCRIPTION")}
            className={`${
              detail === "DESCRIPTION"
                ? "border-hoverPrimary border-b-2 transition-all duration-500"
                : "border-zinc-300 border-b-2 text-gray-500"
            } sm:px-10 py-4 px-4 text-sm sm:text-base  cursor-pointer font-semibold `}
          >
            DESCRIPTION
          </li>
          <li
            onClick={() => setDetail("FEATURES")}
            className={`${
              detail === "FEATURES"
                ? "border-hoverPrimary border-b-2 transition-all duration-500"
                : "border-zinc-300 border-b-2 text-gray-500 "
            } sm:px-10 py-4 px-4 text-sm sm:text-base cursor-pointer font-semibold`}
          >
            FEATURES
          </li>
          <li
            onClick={() => setDetail("SPECIFICATION")}
            className={`${
              detail === "SPECIFICATION"
                ? "border-hoverPrimary border-b-2 transition-all duration-500"
                : "border-zinc-300 border-b-2 text-gray-500  "
            } sm:px-10 py-4 px-2 text-sm sm:text-base cursor-pointer font-semibold `}
          >
            SPECIFICATION
          </li>
        </ul>
        <p className="m-4 text-sm sm:text-base text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
          <br />
          <br /> Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
      <SimilarProducts category={product.category.id} />
    </main>
  );
};

export default ProductDetail;
