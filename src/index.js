import React from "react";
import ReactDOM from "react-dom";
//styles
import Style from "./style/style.css"
//Components 
import Home from "./Components/Main.jsx";
import SignUP from "./Components/signUp.jsx";

ReactDOM.render(
    <div>
    <Home />
    <SignUP />
    </div>,
        document.getElementById("root"))