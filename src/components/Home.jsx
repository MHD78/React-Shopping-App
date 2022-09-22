import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import getAllProds from "../services/getAllProductsService";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import http from "../services/httpServices";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const test = useRef();
    useEffect(() => {
        const getBestSellings = async () => {
            const { data } = await getAllProds(10, 20);
            const category = await http.get("/categories");
            setCategories(category.data);
            setProducts(data);
        };
        getBestSellings();
    }, []);

    const scroll = value => {
        test.current.scrollLeft += value;
    };

    return (
        <main>
            {/* <img src="https://static.vecteezy.com/system/resources/previews/004/267/007/large_2x/flash-sale-banner-design-template-illustration-free-vector.jpg" alt="" className="w-full h-fit rounded-lg mb-16 mx-auto" /> */}
            <Link to={"/products/page/1?category=0&price=All&sort=low"} >
                <section style={{
                    backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/004/267/007/large_2x/flash-sale-banner-design-template-illustration-free-vector.jpg")`
                }} className="w-full h-[430px] md:h-[640px] bg-cover bg-center mb-8 mx-auto" ></section>
            </Link>
            <section className="my-6">
                <div className=" px-4 mx-auto relative">
                    <div
                        ref={test}
                        className="no-scrollbar flex gap-4 overflow-x-scroll rounded-lg bg-yellow-400/75  snap-x scroll-smooth  "
                    >
                        <img
                            src="https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg?w=740&t=st=1663334355~exp=1663334955~hmac=170061d31428bc0bd482e440600e54db8e43eac2c2ba6e39121e0d221d469e2c"
                            className="w-[260px] sm:sticky left-0 z-10 "
                            alt=""
                        />
                        <AiOutlineLeft
                            onClick={() => scroll(-250)}
                            className="hidden md:block  absolute text-xl sm:text-2xl rounded-full p-1.5 font-bold box-content bg-zinc-800  text-hoverPrimary left-60 top-1/2 m-2 cursor-pointer  z-10 "
                        />
                        {products.map(product => {
                            return (
                                <Link
                                    className="min-w-[200px] py-4"
                                    to={`/products/${product.id}`}
                                    target="_blank"
                                >
                                    <ProductCard assets={product} />
                                </Link>
                            );
                        })}
                        <AiOutlineRight
                            onClick={() => scroll(+250)}
                            className="hidden md:block absolute text-xl sm:text-2xl rounded-full p-1.5 font-bold box-content bg-zinc-800  text-hoverPrimary  right-0 top-1/2 z-10 m-2 cursor-pointer"
                        />
                    </div>
                </div>
            </section>
            <h2 className="text-center text-2xl font-semibold  " >Product Categories</h2>
            <section className="flex flex-wrap gap-5 items-center justify-center bg-primary p-4 m-2 rounded-lg ">
                {categories.map(c => {
                    return (
                        <Link to={`/products/page/1?category=${c.id}&price=All&sort=low`} >
                            <div className="sm:w-44 w-36 relative group transition-transform duration-700" key={c.id}>
                                <img className="rounded-lg " src={c.image} alt="" />
                                <span
                                    className=" 
              bg-transparent backdrop-blur-3xl text-2xl font-semibold absolute
              w-full group-hover:h-12  bottom-0  text-center"
                                >
                                    {c.name}
                                </span>
                            </div>

                        </Link>
                    );
                })}
            </section>
        </main>
    );
};

export default Home;
