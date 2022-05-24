import React from "react";
import ReactDOM from "react-dom";

function Main() {
    return <div className="container"></div>;
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
