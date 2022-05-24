import React from "react";
import ReactDOM from "react-dom";
import styles from "./Main.module.scss";
import Home from "./pages/Home";

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
