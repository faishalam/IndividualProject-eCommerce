import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AllProductsPage from "./pages/AllProductsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/products",
        element: <AllProductsPage />
    },
    {
        path: "/products/:filter",
        element: <AllProductsPage />
    },
    {
        path: "/products/:search",
        element: <AllProductsPage />
    },
    
    {
        path: "/product-detail/:id",
        element: <ProductDetailPage />
    },


]);

export default router;
