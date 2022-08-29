import ProductsContextContext from "./context/ProductsContext";
import UserTheme from "./context/UserTheme";
import UserFilters from "./context/UserFilters";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div
      className={`bg-gray-200 dark:bg-zinc-800 min-w-full min-h-screen m-auto`}
    >
      <BrowserRouter>
        <Switch>
          <Layout>
            <ProductsContextContext>
              <UserTheme>
                <UserFilters>
                  {routes.map((route) => (
                    <Route {...route} />
                  ))}
                </UserFilters>
              </UserTheme>
            </ProductsContextContext>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
