import "./styles/main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import RootLayout from "./app/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </StrictMode>
);
