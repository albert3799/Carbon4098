import React from "react";
import "./Topbar.css";
import { ReactComponent as Logo } from "../Assets/Logo.svg";
import { Link } from "react-router-dom";

export function TopBar({visualDescription,hideLogo}){

    
    return(
        <div className="Topbar-container">
            <div className="Topbar-BlackBack "></div>
            <h1 style={{color:"white",position:"absolute", left:"1%"}}>{visualDescription} </h1>
            <div className={"Topbar-LogoContainer "}>
            <Link to="/">
              {hideLogo ? null :<Logo width ="100%" height = "100%" />}
            </Link>
          </div>
          <div className={"Topbar-nav-section"}>
            <Link to="/visualsV">
              <div className={"Topbar-Links"}>Emmisions</div>
            </Link>
            <Link to="/visualsA">
              <div className={"Topbar-Links"}>Allocation</div>
            </Link>
            <Link to="/visualsT">
              <div className={"Topbar-Links"}>Transactions</div>
            </Link>
            <Link to="/trend">
            <div className={"Topbar-TrendsContainer"}>
              <div className={"Topbar-Links"} style={{width:"fit-content"}}>Trends</div>
            </div>
            </Link>
          </div>
        </div>
    );
}