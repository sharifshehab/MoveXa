import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import { ThemeProvider } from "./providers/theme.provider.tsx";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "./components/ui/sonner.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  mirror: false,
  offset: 120,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
