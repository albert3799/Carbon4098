// import React, { useEffect,useState } from 'react'; 
// import * as d3 from 'd3';
// import userData from "./ve4.csv";



// export function Test({sHeight,sWidth}) {

  

//   useEffect(() => {
    
//     var svg = d3.select("svg"),
//     width = +svg.attr("width"),
//     height = +svg.attr("height");

//     // Map and projection. Try:  d3.geoAiry() / d3.geoAitoff() / d3.geoArmadillo() / d3.geoAugust() / d3.geoAzimuthalEqualArea() / d3.geoAzimuthalEquidistant() and more
//     var projection = d3.geoAitoff()
//         .scale(width / 1.3 / Math.PI)
//         .translate([width / 2, height / 2])

//     // Load external data and boot
//     d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson", function(data){

//     // Draw the map
//     svg.append("g")
//         .selectAll("path")
//         .data(data.features)
//         .enter().append("path")
//             .attr("fill", "#69b3a2")
//             .attr("d", d3.geoPath()
//                 .projection(projection)
//             )
//             .style("stroke", "#fff")
//   })

//   }, []);

//   return (
//     <svg  style={{ width: `${sWidth}px`, height: `${sHeight}px` }} id="my_dataviz" width="400" height="300"></svg>

//   );
// }



