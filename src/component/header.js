import React from "react";
import clogo from "../image/logo.png"
export default function Header(props){
    console.log(props.toggle)
    return(
        <nav className={props.theme?'dark':''}>
        <div className="head">
            <img src={clogo} className="logo-img"/>
        <h1 className="head-text">CodeForces Performance Review </h1>
        <div className={!props.theme?'dark-btn':'mode-btn'} onClick={props.toggle}>Change theme</div>
        </div>
        </nav>
    )
}