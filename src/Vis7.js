import React,{useRef,useEffect} from "react";
import * as d3 from 'd3';
// import userData from "./ve4.csv";
import userData from "./Data/v7.csv";
import { color, schemeBlues, stratify, treemap,schemeCategory20 } from "d3";
import { yearCat } from "./Data/categories";
var years =  ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]


  

export function Vis7 ({selectedItems}){
    const chartRef = useRef(null);
  console.log(" selected items are " + selectedItems)
    useEffect(() => {
        // Define chart dimensions

        // //clean up 
        if (!d3.select(chartRef.current).select("svg").empty()) {
          d3.select(chartRef.current)
            .select("svg").remove(); 
        }
        

        const cWidth = chartRef.current.clientWidth;
        const cHeight = chartRef.current.clientHeight;

        var margin = {top: 10, right: 10, bottom: 10, left: 10};
        var width = cWidth- margin.left - margin.right;
        var height = cHeight - margin.top - margin.bottom;

        var svg = d3.select(chartRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        const selectedYears = (selectedItems.length === 0) ? years : selectedItems.map(id => yearCat[id-1].text) 
        console.log("Selected Items Length: " + selectedItems.length);
        console.log("Years: " + years);


        d3.csv(userData).then( data => {
          //filter data 
          const filteredData = data.filter(d => selectedYears.includes(d.YEAR)|| d.YEAR == "root"|| d.MAIN_ACT == "root");
            // Data.push(data);
            var childColumn = data.columns[0];
            var parentColumn = data.columns[2];
            var value = data.columns[1];
           console.log(filteredData);

            var root = d3.stratify()
            .id(function(d) {return d[childColumn]})
            .parentId(function(d) {return d[parentColumn]})
            (filteredData);
            console.log(root)
            root.sum(function(d) {return +d[value]})
       

            d3.treemap()
            .size([width,height])
            .padding(4)(root);
            

           console.log(root.leaves())

          var colors = [  "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b",  "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#aec7e8", "#ffbb78",  "#98df8a", "#ff9896", "#c5b0d5", "#c49c94", "#f7b6d2", "#dbdb8d",  "#9edae5", "#ad494a", "#8c6d31", "#d6616b", "#7b4173", "#ce6dbd",  "#7f4b2e", "#ffbb78", "#bcbd22", "#17becf"];
          var activities = [  "manufacture of ceramic",  "production of pulp or other fibrous materials",  "#N/A",  "Aviation",  "Capture of greenhouse gases",  "Combustion installations",  "Combustion of fuels",  "manufacture of glass",  "Manufacture of mineral wool",  "Metal ore roasting or sintering",  "Mineral oil refineries",  "Other activity",  "Prodcution of aluminium",  "Production of adipic acid",  "Production of ammonia",  "Production of bulk chemicals",  "Production of carbon black",  "production of cement clinker",  "Production of coke",  "Production of glyoxal and glyoxylic acid",  "Production of gypsum or plasterboard",  "Production of hydrogen and synthesis gas",  "Production of metals",  "Production of nitric acid",  "production of pig iron or steel",  "Production of quicklime",  "Production of sodium carbonates",  "Refining of mineral oil"];
          
          var colorScale = d3.scaleOrdinal()
            .domain(activities)
            .range(colors);


           console.log(root.leaves())
            var color = d3.scaleOrdinal()
            .domain(root.leaves().map(d => {return d.data.MAIN_ACT}))
            .range(["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]);
          
            var tooltip = d3.select(chartRef.current)
              .append("div")
              .style("position", "absolute")
              .style("visibility", "hidden")
              .style("background-color","white")
              // .text("I'm a circle!");
           svg
           .selectAll("rect")
           .data(root.leaves())
           .enter()          
           .append("rect")
             .attr('x', function (d) { return d.x0; })
             .attr('y', function (d) { return d.y0; })
             .attr('width', function (d) { return d.x1 - d.x0; })
             .attr('height', function (d) { return d.y1 - d.y0; })
             .style("stroke", "black")
             .attr("fill", d => { return color(d.data.MAIN_ACT) })
             .on("mouseover", function (event,d) {
              var format= d3.format(".4s")
              var formattedAmount = format(d.data.amount).replace(/G/, "b")
      

              tooltip.style("visibility", "visible")
              .style("left", (event.pageX + 10) + "px")
              .style("top", (event.pageY - 28) + "px")
              .text(d.data.MAIN_ACT +"\n"+ formattedAmount+"t"+ "\n" +d.data.YEAR) 
              console.log(d.data.MAIN_ACT)
          })
          .on("mouseout", function(){return tooltip.style("visibility", "hidden");})



        }).catch(function (error){
            console.log(error);
        }) 
     

    },[selectedItems])
 

        
  return (
    <div style={{ width: "100%", height:"100%"}} ref ={chartRef}/>
  );
}



// import React,{useRef,useEffect} from "react";
// import * as d3 from 'd3';
// import userData from "./Data/v7.csv"
// import { color, schemeBlues, stratify, treemap,schemeCategory20 } from "d3";
// import { yearCat } from "./Data/categories";

// var years =  ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"]


// export function Vis7 ({selectedItems}){
//     const chartRef = useRef(null);

//     useEffect(() => {
//         // Define chart dimensions

//         // //clean up 
//           if (!d3.select(chartRef.current).select("svg").empty()) {
//             d3.select(chartRef.current)
//             .select("svg").remove(); 
//               }
                
//         const cWidth = chartRef.current.clientWidth;
//         const cHeight = chartRef.current.clientHeight;
        
//         var margin = {top: 10, right: 10, bottom: 10, left: 10};
//         var width = cWidth- margin.left - margin.right;
//         var height = cHeight - margin.top - margin.bottom;


//         // append the svg object to the body of the page
//         var svg = d3.select(chartRef.current)
//         .append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", height + margin.top + margin.bottom)
//         .append("g")
//         .attr("transform",
//                 "translate(" + margin.left + "," + margin.top + ")");
        
//         const selectedYears = (selectedItems.length === 0) ? years : selectedItems.map(id => yearCat[id-1].text) 
//               console.log("Selected Items Length: " + selectedItems.length);
//               console.log("Years: " + years);

//         d3.csv(userData).then( data => {
//             // Data.push(data);
//             console.log(data)
//           const filteredData = data.filter(d => selectedYears.includes(d.YEAR)|| d.YEAR == "root"|| d.MAIN_ACT == "root");
//             var childColumn = data.columns[2];
//             var parentColumn = data.columns[0];
//             var value = data.columns[1];
//            console.log(filteredData);


//             var root = d3.stratify()
//             .id(function(d) {return d[childColumn]})
//             .parentId(function(d) {return d[parentColumn]})
//             (filteredData);
//             console.log("This is the root"+root)
//             root.sum(function(d) {return +d[value]})
 
//             d3.treemap()
//             .size([width,height])
//             .padding(4)(root);
            


//            console.log(root.leaves())



//           var colors = [  "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b",  "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#aec7e8", "#ffbb78",  "#98df8a", "#ff9896", "#c5b0d5", "#c49c94", "#f7b6d2", "#dbdb8d",  "#9edae5", "#ad494a", "#8c6d31", "#d6616b", "#7b4173", "#ce6dbd",  "#7f4b2e", "#ffbb78", "#bcbd22", "#17becf"];
//           var activities = [  "manufacture of ceramic",  "production of pulp or other fibrous materials",  "#N/A",  "Aviation",  "Capture of greenhouse gases",  "Combustion installations",  "Combustion of fuels",  "manufacture of glass",  "Manufacture of mineral wool",  "Metal ore roasting or sintering",  "Mineral oil refineries",  "Other activity",  "Prodcution of aluminium",  "Production of adipic acid",  "Production of ammonia",  "Production of bulk chemicals",  "Production of carbon black",  "production of cement clinker",  "Production of coke",  "Production of glyoxal and glyoxylic acid",  "Production of gypsum or plasterboard",  "Production of hydrogen and synthesis gas",  "Production of metals",  "Production of nitric acid",  "production of pig iron or steel",  "Production of quicklime",  "Production of sodium carbonates",  "Refining of mineral oil"];
          
//           var colorScale = d3.scaleOrdinal()
//             .domain(activities)
//             .range(colors);

//           var color = d3.scaleOrdinal()
//             .domain(root.leaves().map(d => {return d.data.MAIN_ACT}))
//             .range(["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]);
          

//           var tooltip = d3.select(chartRef.current)
//             .append("div")
//             .style("position", "absolute")
//             .style("visibility", "hidden")
//             .style("background-color","white")
  

//            svg
//            .selectAll("rect")
//            .data(root.leaves())          
//            .enter()
//            .append("rect")
//              .attr('x', function (d) { return d.x0; })
//              .attr('y', function (d) { return d.y0; })
//              .attr('width', function (d) { return d.x1 - d.x0; })
//              .attr('height', function (d) { return d.y1 - d.y0; })
//              .style("stroke", "black")
//              .attr("fill", d => { return color(d.data.MAIN_ACT) })
//              .on("mouseover", function (event,d) {
//               var format= d3.format(".4s")
//               var formattedAmount = format(d.data.amount).replace(/G/, "b")
      

//               tooltip.style("visibility", "visible")
//               .style("left", (event.pageX + 10) + "px")
//               .style("top", (event.pageY - 28) + "px")
//               .text(d.data.MAIN_ACT +"\n"+ formattedAmount+"t"+ "\n" +d.data.YEAR) 
//               console.log(d.data.MAIN_ACT)
//           })
//           .on("mouseout", function(){return tooltip.style("visibility", "hidden");})

  
        

//         }).catch(function (error){
//             console.log(error);
//         }) 
     

//     },[selectedItems])
 
  


//     //read data 


        
//   return (
//     <div style={{ width: "100%", height: "100%" }} ref ={chartRef}/>
//   );
// }


