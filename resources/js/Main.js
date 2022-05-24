import React from "react";
import ReactDOM from "react-dom";
import styles from "./Main.module.scss";
import Home from "./pages/Home";
// import Test from "./pages/Test";

function Main() {
    return (
        <div>
            <Home />
        </div>
    );
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
