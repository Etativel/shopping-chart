import App from "../App";
import { Checkout } from "../pages/Checkout";
import ErrorPage from "../pages/ErrorPage";
import { ProductCheckout } from "../pages/ProductCheckout";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "product/:id",
        element: <ProductCheckout />,
      },
    ],
  },
  {
    path: "/not-found",
    element: <ErrorPage message="Product not found" />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];

export default routes;
