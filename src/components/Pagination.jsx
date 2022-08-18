import { useState, useEffect } from "react";
import http from "../services/httpServices";
import { useProductsDispatcher } from "../context/ProductsContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import getAllProds from "../services/getAllProductsService";
import { useUserFilter, useUserFilterDispatch } from "../context/UserFilters";
import getProdsByCategory from "../services/getProdsByCategory";

const Pagination = () => {
  const dispatch = useProductsDispatcher();
  const filters = useUserFilter();
  const filterDispatch = useUserFilterDispatch();
  const limit = 20;

  const res = [];
  const [active, setActive] = useState(1);
  const [count, setCount] = useState([]);
  const [offset, setOffset] = useState(0);

  const mountHandler = () => {
    filterDispatch({ ...filters, status: "fetching" });
    getAllProds("", "").then((response) => {
      dispatch({ type: "payload", data: response.data.slice(0, 20) });
      filterDispatch({ ...filters, update: true });
      for (let i = 0; i < Math.ceil(response.data.length / 20); i++) {
        if (i !== 0) res.push({ value: i });
      }
      setCount(res);
      filterDispatch({ ...filters, status: "fetched" });
    });
  };
  useEffect(() => {
    if (filters.categoryID === 0) {
      mountHandler();
    } else {
      filterDispatch({ ...filters, status: "fetching" });
      getProdsByCategory(filters.categoryID).then((response) => {
        dispatch({ type: "payload", data: response.data.slice(0, 20) });
        filterDispatch({ ...filters, update: true });
        for (let i = 0; i < Math.ceil(response.data.length / 20); i++) {
          if (i !== 0) res.push({ value: i });
        }
        setCount(res);
        filterDispatch({ ...filters, status: "fetched" });
      });
    }
    window.scroll({ top: 0, behavior: "smooth" });
  }, [filters.categoryID]);
  useEffect(() => {
    if (filters.categoryID === 0) {
      filterDispatch({ ...filters, status: "fetching" });
      getAllProds(offset, limit).then((response) => {
        dispatch({ type: "payload", data: response.data });
        filterDispatch({ ...filters, update: true });
        filterDispatch({ ...filters, status: "fetched" });
      });
    } else {
      filterDispatch({ ...filters, status: "fetching" });
      getProdsByCategory(filters.categoryID, offset, limit).then((response) => {
        dispatch({ type: "payload", data: response.data.slice(0, 20) });
        filterDispatch({ ...filters, update: true });
        filterDispatch({ ...filters, status: "fetched" });
      });
    }
    window.scroll({ top: 0, behavior: "smooth" });
  }, [active]);

  const clickHandler = (value) => {
    setOffset((value - 1) * 20);
    setActive(value);
  };
  const arrowHandler = (side) => {
    if (side === "left" && active > 1) {
      setOffset((prev) => prev - 20);
      setActive((prev) => prev - 1);
    } else if (side === "right" && active < count.length) {
      setOffset((prev) => prev + 20);
      setActive((prev) => prev + 1);
    }
  };
  return (
    <ul
      className={`${
        count < 20 ? "invisible" : "visible"
      } mx-auto my-5 flex items-center justify-center dark:text-white  gap-x-2 lg:p-2  text-sm md:text-base w-full`}
    >
      <li>
        <AiOutlineArrowLeft
          className="cursor-pointer"
          onClick={() => arrowHandler("left")}
        />
      </li>
      {count.map((item) => {
        return (
          <li
            onClick={(e) => clickHandler(e.target.value)}
            value={item.value}
            className={`${
              active === item.value &&
              "bg-orange-400 text-white rounded-full transition-all duration-400 "
            }  px-1.5 md:px-2  cursor-pointer `}
          >
            {item.value}
          </li>
        );
      })}
      <li>
        <AiOutlineArrowRight
          className="cursor-pointer"
          onClick={() => arrowHandler("right")}
        />
      </li>
    </ul>
  );
};

export default Pagination;
