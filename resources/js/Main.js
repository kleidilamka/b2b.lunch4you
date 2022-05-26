import React from "react";
import ReactDOM from "react-dom";
import styles from "./Main.module.scss";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
// import Test from "./pages/Test";

function Main() {
    return (
        <div>
            <Menus />
        </div>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
