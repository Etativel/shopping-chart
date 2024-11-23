import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import { ProductCheckout } from "../pages/ProductCheckout";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: "product/:id", element: <ProductCheckout /> }],
  },
];

export default routes;
