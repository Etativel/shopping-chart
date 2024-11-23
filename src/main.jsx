import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { ProductsProvider } from "./context/ProductsContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </StrictMode>
);
