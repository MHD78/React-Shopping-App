import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import getAllProds from "../services/getAllProductsService";
import getProdsByCategory from "../services/getProdsByCategory";
import { Link } from "react-router-dom";

const Pagination = ({ category }) => {
  const pageNumber = +window.location.pathname.split("/")[3];
  const res = [];
  const [active, setActive] = useState(1);
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (category === "0") {
      getAllProds("", "").then(response => {
        for (let i = 0; i < Math.ceil(response.data.length / 20); i++) {
          if (i !== 0) res.push({ value: i });
        }
        setCount(res);
      });
    } else {
      getProdsByCategory(category).then(response => {
        for (let i = 0; i < Math.ceil(response.data.length / 20); i++) {
          if (i !== 0) res.push({ value: i });
        }
        setCount(res);
      });
    }
  }, [category]);
  useEffect(() => {
    setActive(pageNumber);
  }, [window.location.pathname]);

  return (
    <ul
      className={`${
        count.length <= 1 ? "invisible" : "visible"
      } mx-auto my-5 flex items-center justify-center dark:text-white  gap-x-2 lg:p-2  text-sm md:text-base w-full`}
    >
      <li>
        <Link
          to={`/products/page/${active > 1 ? active - 1 : active}${
            window.location.search
          }`}
        >
          <AiOutlineArrowLeft className="cursor-pointer" />
        </Link>
      </li>
      {count.map(item => {
        return (
          <Link to={`/products/page/${item.value}${window.location.search}`}>
            <li
              value={item.value}
              className={`${
                active === item.value &&
                "bg-hoverPrimary text-white rounded-full transition-all duration-400 "
              }  px-1.5 md:px-2  cursor-pointer `}
            >
              {item.value}
            </li>
          </Link>
        );
      })}
      <li>
        <Link
          to={`/products/page/${active < count.length ? active + 1 : active}${
            window.location.search
          }`}
        >
          <AiOutlineArrowRight className="cursor-pointer" />
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
