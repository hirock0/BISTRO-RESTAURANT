import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import ContextApiProvider from "./utils/ContextApiProvider/ContextApiProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApiProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </ContextApiProvider>
  </StrictMode>
);
