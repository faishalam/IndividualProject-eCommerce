import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/homePage";
import AllProducts from "./components/pages/allProductsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/products",
        element: <AllProducts/>
    },
    
]);

export default router;
