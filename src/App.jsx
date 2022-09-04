import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProductsContextContext from "./context/ProductsContext";
import UserTheme from "./context/UserTheme";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import UserCartContext from "./context/UserCartContext";

function App() {
  return (
    <div
      className={`bg-gray-200 dark:bg-zinc-800 min-w-full min-h-screen m-auto`}
    >
      <BrowserRouter>
        <Switch>
          <ProductsContextContext>
            <UserTheme>
              <UserCartContext>
                <ToastContainer />
                <Layout>
                  {routes.map(route => (
                    <Route {...route} />
                  ))}
                </Layout>
              </UserCartContext>
            </UserTheme>
          </ProductsContextContext>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
