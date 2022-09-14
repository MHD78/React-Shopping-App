import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-screen grid items-center justify-center">
      <Link to={"/products/page/1?category=0&price=All&sort=low"}>
        <button className="bg-orange-400 rounded-lg px-3 py-1">
          Go Shopping!
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
