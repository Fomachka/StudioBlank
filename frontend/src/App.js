import "./App.css";
import {
  HomePage,
  Navbar,
  StorePage,
  AboutPage,
  ContactPage,
  CartPage,
  SingleProductPage,
  ErrorPage,
  SuccessPage,
  SuccessForm,
  CancelPage,
} from "./components/index";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/store/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      },
      {
        path: "/cancel",
        element: <CancelPage />,
      },
      {
        path: "/submitted",
        element: <SuccessForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
