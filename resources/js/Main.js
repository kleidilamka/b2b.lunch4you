import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Ubersicht from "./components/Ubersicht";
import styles from "./Main.module.scss";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Faq from "./pages/Faq";

function Main() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>,
        document.getElementById("main")
    );
}
