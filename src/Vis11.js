import React,{useRef,useEffect} from "react";
import * as d3 from 'd3';
// import userData from "./ve7.csv";
import { stratify, treemap } from "d3";
//import map from "./EuGeoJson.json";
// import vData from "./ve11.csv";
import vData from "./Data/Vis11 2.csv";
import { yearCat2 } from "./Data/categories";
import { descipCat } from "./Data/categories";
var years =  ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]
var units =  ['tCER - Temporary CER','ERU - Emission Reduction Unit','CER - Certified Emission Reduction Unit converted from an AAU',
'ERU - Converted from an RMU','RMU - Removal Unit','Non-Kyoto Unit','AAU - Assigned Amount Unit' ]


export function Vis11 ({selectedItems,selectedItems2}){
    const chartRef = useRef(null);
    console.log("selected items 1 is "+selectedItems)
    console.log("selected items 2 is "+selectedItems2)

    useEffect(() => {

       // //clean up 
        if (!d3.select(chartRef.current).select("svg").empty()) {
          d3.select(chartRef.current)
            .select("svg").remove(); 
        }
            

        // Define chart dimensions
        const cWidth = chartRef.current.clientWidth;
        const cHeight = chartRef.current.clientHeight;
  


        var margin = {top: 10, right: 10, bottom: 10, left: 10};
        var width = cWidth- margin.left - margin.right;
        var height = cHeight - margin.top - margin.bottom;

            
        // create chart on svg
        var svg = d3.select(chartRef.current).append("svg")
        .attr("viewBox", [0, 0, width, height]);

    

        let projection = d3.geoMercator().center([25.19,57]).scale(width / Math.PI)
        .translate([width / 2, height / 2]);
        // console.log(projection);

        // var projection = d3.geoIdentity()
        // .fitExtent([[0, 0], [width, height]], geojson);
        const path = d3.geoPath().projection(projection);
        //console.log(path);

   
        const selectedYears = (selectedItems.length === 0) ? years : selectedItems.map(id => yearCat2[id-1].text) 
        // console.log("Selected Items Length: " + selectedItems.length);
        // console.log("Years: " + years);
        
      
        const selectedUnit = (selectedItems2.length === 0) ? units : selectedItems2.map(id => descipCat[id-1].text) 
        // console.log("Selected Items Length: " + selectedItems2.length);
        // console.log("units: " + units);
      Promise.all(
        [
          d3.json("https://raw.githubusercontent.com/amcharts/amcharts4/master/dist/geodata/es2015/json/region/world/europeUltra.json"),
          d3.csv(vData)
        ]
      )       
        .then(([map,data]) => {

        let  mouseOver = function(d) {
            d3.selectAll(".Country")
              .transition()
              .duration(200)
              .style("opacity", .5)
            d3.select(this)
              .transition()
              .duration(200)
              .style("opacity", 1)
              .style("stroke", "black")
          }
          var tooltip = d3.select("body")
          .append("div")
          .style("position", "absolute")
          .style("visibility", "hidden")
          .style("background-color", "white")
          .style("padding", "5px")
          .style("border", "1px solid black")
          .style("border-radius", "5px")
          .style("font-family", "sans-serif")
          .style("font-size", "12px")
          
          //console.log(data)
          var filteredData = data.filter(d => selectedYears.includes(d.year));
          console.log(filteredData)
          filteredData = filteredData.filter(d => selectedUnit.includes(d.UNIT_TYPE_DESCR))
          console.log(filteredData)


          const groupedData = filteredData.reduce((acc, curr) => {
            const { COUNTRY, amount } = curr;
            if (!acc[COUNTRY]) {
              acc[COUNTRY] = { COUNTRY: COUNTRY, amount: 0 };
            }
            acc[COUNTRY].amount += Number(amount);
            return acc;
          }, {});
          
          const groupedDataArr = Object.values(groupedData).map((item) => {
            return {
              COUNTRY: item.COUNTRY,
              amount: item.amount
            };
          });
          //console.log(groupedDataArr);

          const joinedData = map.features.map((d) => ({
            ...d,
            ...groupedDataArr.find((item) => item.COUNTRY === d.id),
          }));

          //console.log(joinedData)

          
          // console.log(groupedData);

          // var colourScale = d3.scaleSequential(d3.interpolateBlues)
          // .domain([0, 58,836,530,896])
          
          //data and color scale 
          //console.log(joinedData)
          var colorScale = d3.scaleSequential()
           .domain(d3.extent(joinedData, function(d) { return +d.amount; }))
            .interpolator(d3.interpolatePuRd);

          const mapDataWithColors = joinedData.map((d, i) => ({
            d: path(d),
            centroid: path.centroid(d),
            fill: colorScale(d.amount),
            
          }));
          var features = joinedData.features;
          
          
          //console.log(joinedData.COUNTRY);
        let g = svg.append("g");

        g.selectAll(".country")
        .data(joinedData)
        .enter()
        .append("path")
        .attr("class", "Country")
      // draw each country
        .attr("d", d3.geoPath()
        .projection(projection)
        )
        .style("fill", function(d) {
          return colorScale(d.amount);
        })
        .style("stroke", "black")
        .attr("class", function(d){ return "Country" } )
        .style("opacity", .8)
        .on("mouseover", function(event, d) {
          var format= d3.format(".4s")
          var formattedAmount = format(d.amount).replace(/G/, "b")
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", "2px")
          
          tooltip.html(d.properties.name + "<br>" + formattedAmount)
            .style("visibility", "visible")
        })
        .on("mousemove", function(event) {
          tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px")
        })
        .on("mouseout", function(event) {
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", "1px")
          
          tooltip.style("visibility", "hidden")
        })
      //   .on("mouseover", mouseOver)
      //   .on("mouseleave", function(d) {
      //   d3.selectAll(".Country")
      //     .transition()
      //     .duration(200)
      //     .style("opacity", .8)
      //     .style("stroke", "transparent")
      // });
        // .selectAll("path")
        // .data(features)
        // .enter().append("path")
        // .attr("name", function (d) {
        //     return d.properties.name;
        // })

        // .attr("d", path)
   
        // .on('mouseover', function (d) {
        //     d3.select(this)
        //         .style("stroke", "white")
        //         .style("stroke-width", 1)
        //         .style("cursor", "pointer");

        //     d3.select(".country")
        //         .text(d.properties.name);

        //     d3.select('.details')
        //         .style('visibility', "visible")
        // })
    
          // var tooltip = d3.select(chartRef.current)
          // .append("div")
          // .style("position", "absolute")
          // .style("visibility", "visible")
          // .style("background-color","green")
          // .style("height","100px")
          // .style("width","100px")

          // const drawMap = (g) => {  
          //   g.selectAll('path')
          //     .data(mapDataWithColors)
          //     .join('path')
          //     .on("mouseover", ()=> console.log("on mouseover working "))
          //       .attr('d', d => d.d)
          //       .style('fill', d => d.fill)
          //       .style('stroke', '#fff')
          //       .style('stroke-width', 0.5)
          //       .append("name", d => d.fill)
          //       .on('mouseover', (event, d) => {
          //         console.log("moouse done")
          //         //tooltip.style('visibility', 'visible')
          //           // .html(d.country + ': ' + d.fill) // display country name and color value in the tooltip
          //           // .style('left', (event.pageX + 10) + 'px') // position tooltip next to the mouse cursor
          //           // .style('top', (event.pageY + 10) + 'px')
          //       })
          //     .on("mouseout", function(){return tooltip.style("visibility", "hidden");})
    
    
          // }
          // drawMap(g);
        });



    },[selectedItems,selectedItems2])
 
  


    //read data 


        
  return (
    <svg height="100%" width="100%"ref ={chartRef}/>
  );
}




// const joinedData = mapData.features.map((d) => ({
//   ...d,
//   ...jsonData.find((item) => item.id === d.id),
// }));

// const mapDataWithColors = joinedData.map((d, i) => ({
//   d: path(d),
//   centroid: path.centroid(d),
//   fill: d.value > 100 ? "#a2d2ff" : "#cdb4db",
// }));

















// import React,{useRef,useEffect} from "react";
// import * as d3 from 'd3';
// import userData from "./ve7.csv";
// import { stratify, treemap } from "d3";
// //import map from "./EuGeoJson.json";



// export function Vis11 ({sHeight,sWidth}){
//     const chartRef = useRef(null);

//     useEffect(() => {

//         // Define chart dimensions
//         const cWidth = chartRef.current.clientWidth;
//         const cHeight = chartRef.current.clientHeight;


//         var margin = {top: 10, right: 10, bottom: 10, left: 10};
//         var width = cWidth- margin.left - margin.right;
//         var height = cHeight - margin.top - margin.bottom;

            
//         // create chart on svg
//         var svg = d3.select(chartRef.current).append("svg")
//         .attr("viewBox", [0, 0, width, height]);

    

//         let projection = d3.geoMercator().center([0,0]).scale(100)
//         .translate([width / 2, height / 2]);
//         // console.log(projection);

//         // var projection = d3.geoIdentity()
//         // .fitExtent([[0, 0], [width, height]], geojson);
//         const pathGenerator = d3.geoPath().projection(projection);
//         console.log(pathGenerator);

//         let g = svg.append("g");
    
                
//         d3.json("https://raw.githubusercontent.com/amcharts/amcharts4/master/dist/geodata/es2015/json/region/world/europeUltra.json")
//         .then((data) => {

//             // var projection = d3.geoIdentity()
//             // .fitExtent([[0, 0], [width, height]], data);
//             // const pathGenerator = d3.geoPath().projection(projection);
//             console.log(data);
//             g.selectAll("path")
//             .data(data.features)
//             .join("path")
//             .attr("d", pathGenerator)
//             .style('fill', d => d.fill)
//             .style('stroke', '#fff')
//             .style('stroke-width', 0.5);
//         });



//     },[])
 
  


//     //read data 


        
//   return (
//     <div style={{ width: `${sWidth}px`, height: `${sHeight}px` }} ref ={chartRef}/>
//   );
// }

