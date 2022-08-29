import ProductDetail from "./components/ProductDetail";
import HomePage from "./pages/HomePage";

const routes = [
  { path: "/products/:id", component: ProductDetail, exact: true },
  { path: "/", component: HomePage, exact: true },
  // { path: "*", component: NotFound404 },
];

export default routes;
