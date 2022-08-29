import { BiTimer } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { TbReportMoney } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className=" bg-zinc-800  dark:bg-[#0e0d29]">
      <section className="max-w-[1440px] m-auto py-6 border-b-[1px] border-orange-600 hidden md:block ">
        <ul className="flex justify-around items-center gap-x-5 ">
          <li className="text-gray-50 text-sm min-w-max ">
            <BiTimer className="text-2xl sm:text-3xl md:text-4xl text-orange-500 m-auto mb-3" />
            Support Center
          </li>
          <li className="text-gray-50 text-sm min-w-max ">
            <TbTruckDelivery className="text-2xl sm:text-3xl md:text-4xl text-orange-500 m-auto mb-3" />
            Shipping, Delivery and Store Pickup
          </li>
          <li className="text-gray-50 text-sm min-w-max ">
            <AiOutlineDollar className="text-2xl sm:text-3xl md:text-4xl text-orange-500 m-auto mb-3" />
            Returns and Exchanges
          </li>
          <li className="text-gray-50 text-sm min-w-max ">
            <BsBoxSeam className="text-2xl sm:text-3xl md:text-4xl text-orange-500 m-auto mb-3" />
            Check your Order Status
          </li>
        </ul>
      </section>
      <section className="max-w-[1440px] w-full m-auto text-gray-50 flex justify-between items-start flex-wrap gap-y-4 gap-x-12 p-4">
        <ul className="min-w-fit">
          <li className="text-lg font-semibold">Customer Support</li>
          <li className="text-sm my-1">Contact Us </li>
          <li className="text-sm my-1"> Help Center </li>
          <li className="text-sm my-1">Returns and Exchanges</li>
        </ul>
        <ul>
          <li className="text-lg font-semibold">Account</li>
          <li className="text-sm my-1">Order Status </li>
          <li className="text-sm my-1">Manage Account </li>
          <li className="text-sm my-1">Email Preferences</li>
        </ul>
        <ul>
          <li className="text-lg font-semibold">About Us</li>
          <li className="text-sm my-1">Careers </li>
          <li className="text-sm my-1">Marketplace </li>
          <li className="text-sm my-1">Affiliate Program</li>
        </ul>

        <div className=" min-w-fit flex flex-col gap-y-2">
          <h2 className="text-lg font-semibold">Be the first to know</h2>
          <p className="text-sm max-w-sm ">
            Sign up to stay in the loop about the hottest deals, coolest new
            products, and exclusive sales events.
          </p>
          <form action="">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 outline-none text-black "
            />
            <input
              type="submit"
              value={"Sign Up"}
              className="bg-orange-600 p-2"
            />
          </form>
          <div className="gap-x-4 mt-6 text-xl flex justify-around items-center">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
            <BsYoutube />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
