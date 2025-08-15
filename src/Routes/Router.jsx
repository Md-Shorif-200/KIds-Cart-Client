import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/HomePage/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
         {
            path : '/',
            element : <Home></Home>
         }
    ]
  },
]);