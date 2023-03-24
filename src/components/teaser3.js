import React, { useState, useEffect,useRef } from 'react';
import * as d3 from 'd3';
// import './SVGstyles.css';
// import './teaser.css';



const data = [

      { amount: 571200811, year: 2021 },
      { amount: 669802458, year: 2020 },
      { amount: 698087520, year: 2019 },
      { amount: 718570493, year: 2018 },
      { amount: 747835978, year: 2017 },
      { amount: 1553718638, year: 2016 },
      { amount: 805938961, year: 2015 },
      { amount: 847334746, year: 2014 },
      { amount: 894678593, year: 2013 },
      { amount: 2165758164, year: 2012 },
      { amount: 1928781940, year: 2011 },
      { amount: 1928781940, year: 2010 },
      { amount: 1891735473, year: 2009 },
      { amount: 1873744877, year: 2008 }
    
    
  ]
export function  Teaser3Visual ({sHeight,sWidth})  {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current);

    // Define chart dimensions
    // const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    // const width = 600 - margin.left - margin.right;
    // const height = 400 - margin.top - margin.bottom;
     
    const containerWidth = svg.node().getBoundingClientRect().width;
    const containerHeight = svg.node().getBoundingClientRect().height;

    // Define chart dimensions
    const margin = { top:0, right:0, bottom:20, left:45};
    const width = containerWidth - margin.left - margin.right;
    const height = containerHeight - margin.top - margin.bottom;


    var parseDate = d3.timeParse("%Y");


    // Define scales
    const x = d3.scaleTime()
    .range([margin.left, width])
      .domain(d3.extent(data, d => parseDate(d.year)));

    const formatBt = d3.format('.1s');
    const y = d3.scaleLinear()
    .range([height,margin.bottom])
      .domain([0, d3.max(data, d => d.amount)]);

    // Define line generator
    const line = d3.line()
      .x(d => x(parseDate(d.year)))
      .y(d => y(d.amount));


    // Add x-axis
    svg.append("g")
    .attr("transform", `translate(${margin.right}, ${height})`)
      .call(d3.axisBottom(x));

    // Add y-axis
    svg.append("g")
      .call(d3.axisLeft(y).tickFormat(d => formatBt(d).replace('G', 'bt')))
      .attr("transform", "translate("+margin.left +"," + margin.top + ")")


    // Add line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }, [data]);

  return (
    <svg style={{ width: `${sWidth}px`, height: `${sHeight}px` }} ref ={chartRef}/>
  );
};












// import React, { useState, useEffect,useRef } from 'react';
// import * as d3 from 'd3';
// const getData = require('./db.js');

// const LineChart = ({ data }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(chartRef.current);

//     // Define chart dimensions
//     const margin = { top: 20, right: 20, bottom: 30, left: 50 };
//     const width = 600 - margin.left - margin.right;
//     const height = 400 - margin.top - margin.bottom;

//     // Define scales
//     const x = d3.scaleTime()
//       .range([0, width])
//       .domain(d3.extent(data, d => d.date));

//     const y = d3.scaleLinear()
//       .range([height, 0])
//       .domain([0, d3.max(data, d => d.price)]);

//     // Define line generator
//     const line = d3.line()
//       .x(d => x(d.date))
//       .y(d => y(d.price));

//     // Add x-axis
//     svg.append("g")
//       .attr("transform", `translate(0, ${height})`)
//       .call(d3.axisBottom(x));

//     // Add y-axis
//     svg.append("g")
//       .call(d3.axisLeft(y));

//     // Add line
//     svg.append("path")
//       .datum(data)
//       .attr("fill", "none")
//       .attr("stroke", "steelblue")
//       .attr("stroke-width", 1.5)
//       .attr("d", line);
//   }, [data]);

//   return (
//     <svg ref={chartRef} width="600" height="400" />
//   );
// };

// const LineChartComponent = () => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const result = await getData();
//     console.log("got data");
//     setData(result);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return <LineChart data={data} />;
// };

// export default LineChartComponent;


  
