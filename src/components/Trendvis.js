import React, { useRef, useEffect } from 'react';
import * as d3 from "d3";
import data from "../Data/T.csv";


export function Trendvis() {
     const ref = useRef();
    const width = 800;
    const height = 400;
    var duration = 2000;
  useEffect(() => {
    const svg = d3.select(ref.current);
    const margin = { top: 20, right: 50, bottom: 50, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    d3.csv(data).then(data => {
      console.log(data);

      const groupedByDate = data.reduce((acc, curr) => {
        const year = curr.year;
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(curr);
        return acc;
      }, {});
      const groupedByAct = data.reduce((acc, curr) => {
        const MAIN_ACT = curr.MAIN_ACT;
        if (!acc[MAIN_ACT]) {
          acc[MAIN_ACT] = [];
        }
        acc[MAIN_ACT].push(curr);
        return acc;
      }, {});
      // console.log(groupedByAct)
      // console.log(groupedByDate);
      const dataArr = Object.values(groupedByDate);
      const dataArr2 = Object.values(groupedByAct);
      console.log(dataArr2)
      //console.log(dataArr)

      var parseDate = d3.timeParse("%Y");
      
      const x = d3
      .scaleUtc()
      .domain([
        d3.min(dataArr, (d) => d3.min(d, (p) => parseDate(p.year))),
        d3.max(dataArr, (d) => d3.max(d, (p) => parseDate(p.year))),
      ])
      .range([margin.left,width-margin.right,]);

      const formatBt = d3.format('.3s');
    const y = d3
      .scaleLinear()
      .domain([
        -638859,
        1235779
      ])
      .range([height-margin.bottom, margin.top]);

      console.log(y.domain())
      var colors = [  "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b",  "#e377c2", "#7f7f7f", "#bcbd22", "#17becf", "#aec7e8", "#ffbb78",  "#98df8a", "#ff9896", "#c5b0d5", "#c49c94", "#f7b6d2", "#dbdb8d",  "#9edae5", "#ad494a", "#8c6d31", "#d6616b", "#7b4173", "#ce6dbd",  "#7f4b2e", "#ffbb78", "#bcbd22", "#17becf"];
      var activities = [  "manufacture of ceramic",  "production of pulp or other fibrous materials",  "#N/A",  "Aviation",  "Capture of greenhouse gases",  "Combustion installations",  "Combustion of fuels",  "manufacture of glass",  "Manufacture of mineral wool",  "Metal ore roasting or sintering",  "Mineral oil refineries",  "Other activity",  "Prodcution of aluminium",  "Production of adipic acid",  "Production of ammonia",  "Production of bulk chemicals",  "Production of carbon black",  "production of cement clinker",  "Production of coke",  "Production of glyoxal and glyoxylic acid",  "Production of gypsum or plasterboard",  "Production of hydrogen and synthesis gas",  "Production of metals",  "Production of nitric acid",  "production of pig iron or steel",  "Production of quicklime",  "Production of sodium carbonates",  "Refining of mineral oil"];
      
      var colorScale = d3.scaleOrdinal()
        .domain(activities)
        .range(colors);
  
    //var xAxislift = 
    const xAxis = (g) =>
      g.attr("transform", `translate(0,237.5)`).call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
          
      );

      const yAxis = (g) =>
      g.attr("transform", "translate("+ margin.left+",0)").call(
        d3.axisLeft(y).tickSizeOuter(0).ticks(5)
        .tickFormat(d => formatBt(d).replace('G', 'bt'))
      );

    svg.append("g")
    //   .attr("transform", `translate(${margin.left},${height - margin.bottom})`)
      .call(xAxis);

    svg.append("g")
    //   .attr("transform", `translate(${margin.left},${margin.top})`)
      .call(yAxis);


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

      var line = d3.line()
      .x(function(d) { return x(parseDate(d.year)); })
      .y(function(d) { return y(d.net); });
    


        // const pdata = [
        //   { x: 2008, y: 5000000 },
        //   { x: 2009, y: 6000000 },
        //   { x: 2010, y: 7000000 },
        //   { x: 2011, y: 8000000 },
        //   { x: 2012, y: 9000000 },
        //   { x: 2013, y: 10000000 },
        //   { x: 2014, y: 12000000 },
        //   { x: 2015, y: 14000000 },
        //   { x: 2016, y: 1000000 },
        //   { x: 2017, y: 100000 }
        // ];
        
        // function updateLine(pdata) {
        //   linePath.datum(pdata)
        //     .attr("d", line);
        // }
        // var i = 0;
        // // Call the updateLine function on each tick of your animation
        // function tick() {
        //   // Your code to update the scatter plot here...
          
        //   // Transform your data to an array of arrays for each point up to the current index i
        //   var lineData = pdata.slice(0, i);
          
        //   // Update the line with the previous data points
        //   updateLine(lineData);
          
        //   // Increment i
        //   i = (i + 1) % pdata.length;
        // }
        
        // // Start the animation
        // d3.interval(tick, 400);

    const update = (dataArr) => {
      // Join new data with old elements, if any.
      const circle = svg.selectAll("circle").data(dataArr, (d) => d.id);
      // const line = svg.selectAll("path").data(dataArr2,(d)=> d.id);

      // Remove old elements as needed.
      circle.exit().remove();

      // Update old elements as needed.
      circle
        .attr("cx", (d) => x(parseDate(d.year)))
        .attr("cy", (d) => y(d.net))
        .style("fill", (d) => colorScale(d.id));

      
   
      // Add new elements as needed.
      circle 
        .enter()
        .append("circle")
        .attr("cx", (d) => x(parseDate(d.year)))
        .attr("cy", (d) => y(d.net))
        .attr("r", 5)
        .style("fill", (d) => colorScale(d.MAIN_ACT))
        .style("opacity", 0.5)
        .on("mouseover", function(event, d) {
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", "2px")
          
          tooltip.html(d.MAIN_ACT)
            .style("visibility", "visible")
            console.log(d.MAIN_ACT)

           
        })
        .on("mousemove", function(event) {
          tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px")
        })
        .on("mouseout", function(event) {
          d3.select(this)
            .style("stroke", "black")
            .style("stroke-width", "0px")
          
          tooltip.style("visibility", "hidden")
        })
        .transition()
        .duration(duration)
        .attr("r", 10)
        .style("opacity", 1)

        // add trail
        // line
        // .enter()
        // .append("path")
        // .attr("class", "line")
        // .attr("d", function(d) { return line(d.net); });
 



      // Sort elements by id to ensure consistent drawing order.
      circle.order();
    };

    // Call update() initially to draw the initial data.
    update(dataArr[0]);

    // Animate the data points.
    let dataIndex = 1;
    const animate = setInterval(() => {
    update(dataArr[dataIndex]);
    dataIndex = (dataIndex + 1) % dataArr.length;
    }, duration);

  

    // Add x-axis and y-axis to the SVG.
    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);


    }).catch(function (error){
      console.log(error);
    }) 
    
    
  }, [data, duration, height, width]);

  return (
    <svg ref={ref} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" />
  );
  }
  