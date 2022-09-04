import ProductDetail from "./components/ProductDetail";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const routes = [
  { path: "/products/:id", component: ProductDetail, exact: true },
  { path: "/products/page/:number", component: ProductsPage, exact: true },
  { path: "/cart", component: CartPage, exact: true },
  { path: "/", component: HomePage, exact: true },
  // { path: "*", component: NotFound404 },
];

export default routes;
