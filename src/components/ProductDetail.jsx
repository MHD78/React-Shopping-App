import { useState, useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import getSingleProduct from "../services/getSingleProduct";
const ProductDetail = (props) => {
  console.log(props);
  const [product, setProduct] = useState({ images: [] });
  const [detail, setDetail] = useState("DESCRIPTION");

  useEffect(() => {
    getSingleProduct(props.match.params.id).then((res) => setProduct(res.data));
    console.log("first");
    window.scrollTo(0, 0, "smooth");
  }, []);

  const [active, setActive] = useState(0);
  const [selectedColor, setColor] = useState();
  const colors = ["bg-red-400", "bg-green-400", "bg-black", "bg-yellow-400"];
  return (
    <section className="w-full max-w-7xl  flex  flex-col justify-center mx-auto bg-gray-50 rounded-lg my-12 ">
      <section className=" w-full flex justify-center md:flex-row flex-col mx-auto py-12 px-4 gap-2">
        <div className="  flex flex-col-reverse justify-between gap-y-2">
          <div className=" max-w-xl">
            <ul className="w-[320px]   flex">
              {product.images.map((image, index) => {
                return (
                  <li
                    onClick={() => setActive(index)}
                    className={`${
                      active === index
                        ? "border-orange-600 border-b-2 transition-all duration-500"
                        : "border-orange-200 border-b-2"
                    } pr-1 py-2 `}
                  >
                    <img src={image} className=" rounded-lg" />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" relative max-w-xl ">
            <img src={product.images[0]} className=" rounded-lg" />
            <div className=" right-2 text-4xl font-bold text-orange-400">
              <AiOutlineLeft className="top-1/2 absolute cursor-pointer mb-2 hover:text-orange-500" />
              <AiOutlineRight className="top-1/2 absolute right-0 cursor-pointer hover:text-orange-500" />
            </div>
          </div>
        </div>
        <div className=" max-w-xl sm:px-4 flex flex-col sm:justify-between sm:border-l-2">
          <h1 className="text-2xl font-semibold my-4 sm:my-0">
            {product.title}
          </h1>
          <p className="mb-4">{product.description}</p>
          <h2 className="text-2xl font-semibold mb-4">${product.price}</h2>

          <div className="mb-4 max-w-xl  pt-3">
            <p className="mb-6 text-lg">SELECT COLOR</p>
            {colors.map((color, index) => {
              return (
                <span
                  onClick={() => setColor(index)}
                  className={`${color} ${
                    selectedColor === index &&
                    "outline outline-offset-2 outline-orange-500 outline-2 "
                  } cursor-pointer text-black rounded-full px-3 py-0.5 mr-2 `}
                ></span>
              );
            })}
          </div>
          <div className="max-w-xl flex justify-between  mb-4  pb-3">
            <h2 className="text-lg">QUANTITY : 1</h2>
            <span className="flex gap-x-3">
              <AiOutlineMinus />
              <AiOutlinePlus />
            </span>
          </div>
          <button className="max-w-xl w-full text-gray-700 text-lg font-bold bg-orange-400 hover:bg-orange-500 px-full py-2 rounded-lg">
            ADD TO CART
          </button>
        </div>
      </section>
      <section className=" w-full mb-12 border-t-2">
        <ul className="flex justify-start m-4">
          <li
            onClick={() => setDetail("DESCRIPTION")}
            className={`${
              detail === "DESCRIPTION"
                ? "border-orange-600 border-b-2 transition-all duration-500"
                : "border-orange-200 border-b-2 text-gray-500"
            } sm:px-10 py-4 px-4 text-sm sm:text-base  cursor-pointer font-semibold `}
          >
            DESCRIPTION
          </li>
          <li
            onClick={() => setDetail("FEATURES")}
            className={`${
              detail === "FEATURES"
                ? "border-orange-600 border-b-2 transition-all duration-500"
                : "border-orange-200 border-b-2 text-gray-500 "
            } sm:px-10 py-4 px-4 text-sm sm:text-base cursor-pointer font-semibold`}
          >
            FEATURES
          </li>
          <li
            onClick={() => setDetail("SPECIFICATION")}
            className={`${
              detail === "SPECIFICATION"
                ? "border-orange-600 border-b-2 transition-all duration-500"
                : "border-orange-200 border-b-2 text-gray-500  "
            } sm:px-10 py-4 px-4 text-sm sm:text-base cursor-pointer font-semibold `}
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
    </section>
  );
};

export default ProductDetail;
