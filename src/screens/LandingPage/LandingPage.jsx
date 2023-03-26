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
import CarouselComponent from "../../CaroselComponent";
import { TopBar } from "../../components/TopBar";



export const LandingPage = () => {
  return (
    <div className={"landing-page-landing-page-wrapper"}>
      <div className={"landing-page-landing-page"}>
        <div className={"landing-page-overlap-group"}>
        <TopBar hideLogo={false}/>          
          <img className={"landing-page-backround-images"} src={backgroundImage} />
          <div className={"landing-page-hero-action"}>
            <Link to="/trend">
              <div className={"landing-page-frame"}>
                <h1 className={"landing-page-explore-visuals"}>Explore visuals</h1>
              </div>
            </Link>
            <div className={"landing-page-intro-vid"} style={{width: '698px'}}>
              <CarouselComponent/>
            </div>
          </div>
        </div>
        
        <div className="text-body">
        <h1 style={{marginBottom:"50px"}}>ETS explained</h1>
          <p>The European Union Emissions Trading System (EU ETS) is a cap-and-trade system that was created to help reduce greenhouse gas emissions in the European Union (EU). It was launched in 2005 and is currently the world's largest carbon market. The system operates across all EU member states, as well as Iceland, Liechtenstein, and Norway. In this essay, we will explore the EU ETS in detail, including its background, how it works, its successes and challenges, and its future prospects.</p>
          <p style={{fontWeight:"bold"}}>Background</p>
          <p>The EU ETS was established as part of the EU's efforts to reduce greenhouse gas emissions and combat climate change. The system was created as a result of the EU's ratification of the Kyoto Protocol in 2002. The Kyoto Protocol is an international agreement that requires signatories to reduce their greenhouse gas emissions. The EU ETS is a market-based mechanism designed to facilitate these reductions by creating a carbon market where greenhouse gas emissions can be traded. </p>
          <p  style={{fontWeight:"bold"}}>How it works</p>
          <p>Under the EU ETS, a cap is placed on the total amount of greenhouse gas emissions that can be emitted by covered entities, such as power plants, factories, and airlines. This cap is reduced over time to ensure emissions reductions. Covered entities are required to hold allowances equal to their emissions, and these allowances can be traded with other entities in the market. The aim of the system is to create a price on carbon emissions, which incentivizes companies to reduce their emissions and invest in cleaner technologies. The EU ETS covers a range of sectors, including power generation, industrial processes, aviation, and more. The system also includes various flexibility mechanisms, such as the ability to purchase credits from outside the EU, and the ability to bank or borrow allowances.</p>
          <p style={{fontWeight:"bold"}}> Successes and Challenges</p>
          <p>The EU ETS has been successful in reducing greenhouse gas emissions since its inception. Between 2005 and 2020, emissions from the sectors covered by the system decreased by 43%. The system has also contributed to the development of low-carbon technologies and has encouraged investment in renewable energy.However, the EU ETS has also faced several challenges over the years. One of the main challenges has been the oversupply of allowances, which has led to a low carbon price and reduced incentives for companies to invest in emissions reductions. The COVID-19 pandemic also had a significant impact on the carbon market, with reduced economic activity leading to a drop in emissions and a decrease in the demand for allowances.</p>
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