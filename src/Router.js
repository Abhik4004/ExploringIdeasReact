import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Hero from "./Hero";

export default function Router() {
  const BrowserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Hero />,
      children: [
        {
          path: "/",
          element: < />,
        },
        {
          path: "/contact-us",
          element: < />,
        },
        {
          path: "/product",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRoutes} />;
}
