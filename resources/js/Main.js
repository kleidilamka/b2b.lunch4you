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

function Main() {
    return (
        <div>
            <Navbar />
            <Dashboard />
            <Test />
        </div>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
