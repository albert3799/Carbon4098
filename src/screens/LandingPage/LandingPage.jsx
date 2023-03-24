import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import "./style2.css";
import ReactSVG from 'react-svg';
import backgroundImage from './background.png'
import { Teaser1Visual } from "../../components/teaser1";
import { Teaser2Visual } from "../../components/teaser2";
import { Teaser3Visual } from "../../components/teaser3";
import { ReactComponent as Logo } from "../../Assets/Logo.svg";



export const LandingPage = () => {
  return (
    <div className={"landing-page-landing-page-wrapper"}>
      <div className={"landing-page-landing-page"}>
        <div className={"landing-page-overlap-group"}>
          <div className={"landing-page-rectangle"} />
          
          <img className={"landing-page-backround-images"} src={backgroundImage} />
          <div className={"landing-page-nav-secton"}>
            <Link to="/visualsV">
              <div className={"landing-page-text-wrapper"}>Emmisions</div>
            </Link>
            <Link to="/visualsA">
              <div className={"landing-page-text-wrapper"}>Allocation</div>
            </Link>
            <Link to="/visualsT">
              <div className={"landing-page-transactions"}>Transactions</div>
            </Link>
            <div className={"landing-page-trends-wrapper"}>
              <div className={"landing-page-trends"}>Trends</div>
            </div>
          </div>
          <div className={"landing-page-logo"}>
          <Logo width ="100%" height = "100%"  />
          </div>
          <div className={"landing-page-hero-action"}>
            <Link to="/visuals">
              <div className={"landing-page-frame"}>
                <h1 className={"landing-page-explore-visuals"}>Explore visuals</h1>
              </div>
            </Link>
            <div className={"landing-page-intro-vid"} />
          </div>
        </div>
        <div className={"landing-page-teaser"}>
          <p className={"landing-page-p"}>
            Carbon prices continue <br />
            to rise
          </p>
          <div className={"landing-page-frame-6"}>
          
          <Teaser1Visual/>
          </div>
        </div>
        <div className={"landing-page-teaser"}>
          <p className={"landing-page-p"}>
            Verified emmisions are <br />
            falling
          </p>
          <div className={"landing-page-frame-6"}>
          
          <Teaser2Visual/>
          </div>
        </div>
        <div className={"landing-page-teaser"}>
          <p className={"landing-page-p"}>
            Free allocations are  <br />
             declining
          </p>
          <div className={"landing-page-frame-6"}>
          
          <Teaser3Visual/>
          </div>
        </div>
        
      </div>
    </div> 
    
  );
};


{/* <div className="landing-page-container">
<div className="landing-page-inner-container">
  <div className="backround-container">
    <div className="Top-Rectangle"/>
     {/* <img className={"landing-page-backround-images"} src={backgroundImage} /> */}
//   </div>

// <div className="Top-bar-container">
//   {/* <div className="Logo"/> */}
// </div>

// </div>
// </div> */}