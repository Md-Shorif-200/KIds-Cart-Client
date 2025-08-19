import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Contact from "../Pages/Contact/Contact";
import CheckoutForm from "../Pages/Checkout/CheckoutForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
         {
            path : '/',
            element : <Home></Home>
         },
         {
          path : '/contact',
          element : <Contact></Contact>
         },
         {
          path : '/checkout',
          element : <CheckoutForm></CheckoutForm>
         }
    ]
  },
]);