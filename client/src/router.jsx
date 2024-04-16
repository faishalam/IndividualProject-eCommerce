import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/homePage";
import AllProducts from "./components/pages/allProductsPage";
import ProductDetail from "./components/pages/productDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/products",
        element: <AllProducts />
    },
    {
        path: "/products/:filter",
        element: <AllProducts />
    },
    {
        path: "/products/:search",
        element: <AllProducts />
    },
    
    {
        path: "/product-detail/:id",
        element: <ProductDetail />
    },


]);

export default router;
