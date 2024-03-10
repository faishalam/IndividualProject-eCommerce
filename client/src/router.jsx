import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/pages/homePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
]);

export default router;
