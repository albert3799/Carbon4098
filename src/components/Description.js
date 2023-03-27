import React from "react";
import "./Description.css"
export function Description({textSummary}){

    return(
        <div className="Description-container">
        <div className="stat-group">
            {/* <div className="stat-container">
                <div className="figure">  <p>Largest Year   </p>       </div>
                <div className="figure"> <p> 2008</p></div>
            </div>
            <div className="stat-container">
                <div className="figure">    8000mgt        </div>
                <div className="figure-details"> <p> most free permit activity </p></div>
            </div>
            <div className="stat-container">
            <div className="figure">    8000mgt        </div>
            <div className="figure-details"> <p> this is the activity amounthieernne kisdnfmsdk jsdndfkm</p></div>
            </div> */}
        </div>
        <div className="summary">
            <p>{textSummary} </p>
        </div>
        {/* <div className="summary"></div> */}
        </div>
    )
}

// export function statCards (){

//     return(
//         <div className="stat-container">

//         </div>
//     )
// }