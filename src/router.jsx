import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/HomePage";
import About from "./components/AboutPage";

function Router() {
   return(
        <Routes>
           <Route element={<Home/>} path="/" exact />
           <Route element={<About/>} path="/about" />
        </Routes>
   )
}

export default Router;