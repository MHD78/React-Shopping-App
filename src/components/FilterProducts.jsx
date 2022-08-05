import { useProductsDispatcher, useProducts } from "../context/ProductsContext";
import { RadioGroup } from "@headlessui/react";
import { useState, useEffect } from "react";
import { BiCheckbox } from "react-icons/bi";
import { BiCheckboxChecked } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "./SearchBar";
import http from "../services/httpServices";

const categories = [
  "All",
  "Clothes",
  "Electronics",
  "Furniture",
  "Shoes",
  "Others",
  "Laptop",
];
const prices = [
  "All",
  "Under 100$",
  "100$ - 200$",
  "200$ - 500$",
  "500$ - 1000$",
  "More Than 1000$",
];
const FilterProducts = ({ status, setStatus, sort, filter, setFilter }) => {
  const products = useProducts();
  const dispatch = useProductsDispatcher();

  const [category, setcategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (status === "open") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [status]);

  useEffect(() => {
    dispatch({ type: "filterByCategory", value: category });
    dispatch({ type: "filterByPrice", value: price });
    dispatch({ type: "filterBySearch", value: value });
    setFilter(categories.indexOf(category));
    dispatch({ type: "sort", value: sort });
  }, [category, price, value, filter, sort]);

  useEffect(() => {
    if (category === "All") {
      http.get(`/products?offset=0&limit=12`).then((response) => {
        dispatch({ type: "payload", data: response.data });
        dispatch({ type: "filterByPrice", value: price });
        dispatch({ type: "filterBySearch", value: value });
        dispatch({ type: "sort", value: sort });
        console.log(sort);
      });
    }
  }, [category]);

  return (
    <section
      className={`${
        status === "close" ? "invisible" : "visible"
      } absolute w-full lg:h-fit h-4/6 overflow-y-scroll lg:overflow-hidden bottom-0 dark:bg-zinc-600 dark:text-gray-50 flex flex-col gap-4 z-10 lg:col-span-2 lg:visible lg:w-fit bg-white lg:ml-4 mt-4 rounded-lg  lg:sticky lg:top-5 `}
    >
      <AiOutlineClose
        onClick={() => setStatus("close")}
        className="absolute right-2 top-3 lg:invisible "
      />
      <SearchBar value={value} setValue={setValue} />
      <RadioGroup className={"p-2"} value={category} onChange={setcategory}>
        <RadioGroup.Label className="text-lg lg:text-xl font-bold">
          Categories
        </RadioGroup.Label>
        {categories.map((category, index) => {
          return (
            <RadioGroup.Option
              value={category}
              key={index}
              className="cursor-pointer m-1 ml-2 text-xs"
            >
              {({ checked }) => (
                <span className="flex justify-between items-center">
                  {category}
                  {checked ? (
                    <BiCheckboxChecked className="text-2xl text-[#da7d26] " />
                  ) : (
                    <BiCheckbox className="text-2xl" />
                  )}
                </span>
              )}
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
      <RadioGroup className={"p-2"} value={price} onChange={setPrice}>
        <RadioGroup.Label className="text-lg lg:text-xl font-bold">
          Prices
        </RadioGroup.Label>
        {prices.map((price, index) => {
          return (
            <RadioGroup.Option
              value={price}
              key={index}
              className="cursor-pointer m-1 ml-2 text-xs"
            >
              {({ checked }) => (
                <span className="flex justify-between items-center">
                  {price}
                  {checked ? (
                    <BiCheckboxChecked className="text-2xl text-[#da7d26]" />
                  ) : (
                    <BiCheckbox className="text-2xl" />
                  )}
                </span>
              )}
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
      <div
        onClick={() => setStatus("close")}
        className="lg:hidden text-center font-semibold border-t dark:border-orange-500 dark:bg-zinc-500  border-gray-500 p-1 bg-white sticky bottom-0"
      >
        Show {products.length} Products
      </div>
    </section>
  );
};

export default FilterProducts;
