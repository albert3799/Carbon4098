import React,{useState } from "react";
import { yearCat } from "../../Data/categories";
import { MyScrollView } from "../../Scroll";
import { Vis4 } from "../../Vis4";
import { Vis7 } from "../../Vis7";
import "./style.css";
import { TopBar } from "../../components/TopBar";
import { Description } from "../../components/Description";


// import { yearCat } from "./Data/categories";
//import Vis4 from "../../components/Vis4";
// import { Vis11 } from "../../Vis11";
// import { Vis4 } from "../../Vis4";

export const VisualsV = () => {

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItems = (items) => {
    setSelectedItems(items);
  };

  return (
    <div className={"visuals-visuals-wrapper"}>
      <TopBar hideLogo={true} visualDescription="Verified emissions by activity and year 2008-21"/>
      <div className={"visuals-visuals"}>
        <div className="visual-column-one">
          <div className="visual-container"> <Vis4 selectedItems={selectedItems} /> </div>
          <Description textSummary="The above is a treemap containing the share of emmisions by industry,each rectangle represents a different year and this can be customised using the year selection tool.Hovering over revels the industry, amount and year"/>
          {/* <div className="description">
            <div className="stat-container">
              <div/>
              <div/>
            </div>
            <div className="stat-container2">

            </div>
            <div className="stat-container3">

            </div>
            <div className="text-summary"> 
              <div className="description-text"/> 
              this is the text which provides context to the visual 
             </div>
          </div> */}
        </div>  
        <div className="visual-column-two">
          <div className="year-scroll">
            <MyScrollView data={yearCat} title="Year" onSelectItems={handleSelectItems}/>
          </div>

        </div>
      </div>
    </div>
  );
};

// <div className={"visuals-overlap"}>
//           <div className={"visuals-rectangle"} />
//           <div className={"visuals-descriptive-section"} />
//           <div className={"visuals-summary"}>
//             <h1 className={"visuals-max"}>Max</h1>
//             <div className={"visuals-heavy-industries"}>heavy industries</div>
//           </div>
//           <div className={"visuals-summary-2"}>
//             <div className={"visuals-max"}>Max</div>
//             <div className={"visuals-heavy-industries"}>heavy industries</div>
//           </div>
//           <div className={"visuals-summary-3"}>
//             <div className={"visuals-max"}>Max</div>
//             <div className={"visuals-heavy-industries"}>heavy industries</div>
//           </div>
//           <div className={"visuals-summary-4"}>
//             <div className={"visuals-max"}>Max</div>
//             <div className={"visuals-heavy-industries"}>heavy industries</div>
//           </div>
//           <div className={"visuals-text-blurb"} />
//         </div>
//         <div className={"visuals-overlap-group2"}>
//           <div className={"visuals-rectangle-2"} />
//           <div className={"visuals-nav-secton"}>
//             <div className={"visuals-text-wrapper"}>Emmisions</div>
//             <div className={"visuals-text-wrapper"}>Allocation</div>
//             <div className={"visuals-transactions"}>Transactions</div>
//             <div className={"visuals-trends-wrapper"}>
//               <div className={"visuals-trends"}>Trends</div>
//             </div>
//           </div>
//           {/* <div className={"visuals-rectangle-3"} /> */}
//           {/* //<Vis4/> */}
//           <div className={"visuals-logo"}>
//             <div className={"visuals-rectangle-1"} />
//           </div>
//           <div className={"visuals-description-frame"}>
//             <div className={"visuals-description-of-visual"}>Description of visual</div>
//           </div>
//         </div>
//         <div className={"visuals-overlap-group"}>
//           <div className={"visuals-industry-customisation"}>
//             <div className={"visuals-div"}>Industry</div>
//             <div className={"visuals-industry-scroll"} />
//           </div>
//           <div className={"visuals-city-customisation"}>
//             <div className={"visuals-div"}>City</div>
//             <div className={"visuals-city-scroll"} />
//           </div>
//           <div className={"visuals-year-customisation"}>
//             <div className={"visuals-div"}>Year</div>
//             <div className={"visuals-year-scroll"} />
//           </div>
//         </div>