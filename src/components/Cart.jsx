import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserCart, useUserCartDispatcher } from "../context/UserCartContext";

const Cart = () => {
  const userCart = useUserCart();
  const dispatch = useUserCartDispatcher();
  const [cart, setCart] = useState([]);
  const [delivery, setDelivery] = useState("free");
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(subTotal);

  useEffect(() => {
    setCart(userCart);
  }, [userCart]);

  useEffect(() => {
    let sub = 0;
    cart.map(product => (sub += product.price * product.quantity));
    setSubTotal(sub);
  }, [cart]);

  const render = () => {
    if (cart.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src="https://www.digikala.com/statics/img/svg/empty-cart.svg"
            alt=""
          />
          <h1 className="text-lg font-semibold">Your cart is empty!</h1>
          <Link
            to={"/products/page/1?category=0&price=All"}
            className="bg-orange-400 text-white font-semibold rounded-lg px-2 py-1"
          >
            back to products
          </Link>
        </div>
      );
    } else {
      return cart.map(item => {
        return (
          <div className=" flex flex-col sm:flex-row gap-4   border-b-[1.5px] border-gray-200 py-4  mx-auto overflow-hidden">
            <img
              className="sm:w-[180px] sm:h-[120px] w-full rounded-lg shadow-lg "
              src={item.image}
            />
            <div className="w-full gap-10 flex flex-col justify-between">
              <div className="flex flex-wrap justify-between items-start">
                <span>
                  <h2 className="text-lg text-gray-800 font-medium mb-1">
                    {item.title}
                  </h2>
                  <p className="text-xs text-gray-600">
                    ${item.price} | in Stock
                  </p>
                </span>
                <p className="text-lg font-semibold text-gray-600">
                  ${item.price * item.quantity}
                </p>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="flex items-center text-sm gap-3 flex-wrap">
                  <span
                    className={`${item.colorClass} rounded-full p-3 `}
                  ></span>
                  <span className="flex py-1 items-center rounded-lg gap-2 px-2 border-[2px] border-gray-300/75  shadow-lg  bg-white  max-w-fit">
                    <AiOutlineMinus
                      className="cursor-pointer"
                      onClick={() => countHandler(item.id, item.color, "minus")}
                    />
                    {item.quantity}
                    <AiOutlinePlus
                      className="cursor-pointer"
                      onClick={() => countHandler(item.id, item.color, "plus")}
                    />
                  </span>
                </span>
                <span className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                  <span className="flex items-center gap-1 cursor-pointer transition-colors duration-400 hover:text-orange-500">
                    <AiFillHeart />
                    Save
                  </span>
                  |
                  <span
                    onClick={() => deleteHandler(item.id, item.color)}
                    className="flex items-center gap-1 cursor-pointer transition-colors duration-400 hover:text-red-500"
                  >
                    <BsFillTrashFill />
                    Delete
                  </span>
                </span>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    if (delivery === "express") {
      setTotal(subTotal + 14 + 10);
    } else {
      setTotal(subTotal + 14);
    }
  }, [subTotal, delivery]);

  const deleteHandler = (id, color) => {
    dispatch(cart.filter(item => item.suk !== id + color));
  };

  const countHandler = (id, color, type) => {
    const clone = [...cart];
    const index = clone.findIndex(item => item.suk === id + color);
    const product = clone[index];
    if (type === "minus") {
      product.quantity -= 1;
    } else {
      product.quantity += 1;
    }

    dispatch(clone);
  };

  return (
    <section className="my-24 px-4 w-full lg:flex-row flex-col justify-center flex gap-4">
      <div className="w-full  lg:max-w-2xl h-fit rounded-lg bg-white p-6">
        <h1 className="text-lg font-semibold border-b-2 border-orange-300 max-w-fit pr-2 pb-2">
          Cart
        </h1>
        {render()}
      </div>

      <div className="bg-white w-full lg:w-max h-fit flex flex-col p-4  rounded-lg ">
        {/* //Delivery section */}
        <h2 className="text-lg">Delivery</h2>
        <div className="border-dashed  border-b-[1.5px] border-gray-300 py-2">
          <div className="flex max-w-max rounded-lg  gap-5 justify-around items-center p-1 bg-gray-200  ">
            <p
              onClick={() => setDelivery("free")}
              className={`${
                delivery === "free" && "bg-white text-gray-900"
              } font-semibold px-3 py-1 rounded-lg cursor-pointer`}
            >
              Free
            </p>
            <p
              onClick={() => setDelivery("express")}
              className={`${
                delivery === "express" && "bg-white text-gray-900"
              } font-semibold px-3 py-1 rounded-lg cursor-pointer`}
            >
              Express: $9.99
            </p>
          </div>
          <p className="text-xs text-gray-400 mt-2 ml-1">
            Delivery date: June 24, 2022
          </p>
        </div>
        <div className=" border-dashed border-b-[1.5px] border-gray-300 py-5 ">
          <span className="relative">
            <input
              className=" px-2 py-1 rounded-lg outline-1 outline outline-gray-300"
              placeholder="Promocode..."
              type="text"
            />
            <button className="absolute right-0  bg-orange-400 text-white px-3 py-1 rounded-tr-lg rounded-br-lg">
              Apply
            </button>
          </span>
        </div>
        <div className="flex my-2 items-center justify-between border-dashed border-b-[1.5px] border-gray-300 py-5">
          <span className="flex flex-col gap-1">
            <h2 className="text-lg ">Subtotal</h2>
            <p className="text-xs text-gray-500 ">Discount</p>
            <p className="text-xs text-gray-500 ">Delivery</p>
            <p className="text-xs text-gray-500 ">Tax</p>
          </span>
          <span className="text-right flex flex-col gap-1">
            <h2 className="text-lg">${subTotal}</h2>
            <p className="text-xs text-gray-500 ">- $16.19 (20%) </p>
            <p className="text-xs text-gray-500 ">
              ${delivery === "free" ? 0.0 : 9.99}
            </p>
            <p className="text-xs text-gray-500 ">+ $14.00</p>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex justify-between">
            <h2 className="text-lg">Total</h2>
            <h2 className="text-lg">${total}</h2>
          </span>
          <button className="md:w-full bg-orange-400 hover:bg-orange-500 font-semibold py-1 text-white rounded-lg">
            Proceed to checkout
          </button>
          <button className="md:w-full bg-white border-orange-300 font-semibold border-[1px] text-gray-700 py-1  rounded-lg">
            <Link to={"/products/page/1?category=0&price=All"}>
              Countinue shopping
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
