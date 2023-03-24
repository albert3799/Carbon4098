import React,{useRef,useEffect} from "react";
import * as d3 from 'd3';
import userData from "./test.csv";




export function Test2 ({}){
    const chartRef = useRef(null);

    useEffect(() => {
        
      mapSvg = (d3projection, map, centerX, centerY, scaleFactor=5, width=800, height=800, fillOne='#a2d2ff', fillTwo='#cdb4db') => {
        const svg = d3.create("svg")
          .attr('width', width)
          .attr('height', height)
      
        // Paths 
        const projection = d3projection
          .center([centerX, centerY])
          .translate([width/2, height/2])
          .scale(width * scaleFactor)
        const path = d3.geoPath()
          .projection(projection)
      
        // Data 
        // Map each raw feature to the path corresponding to it, e.g. path(franceCommunes.features[0]) produces a path string
        // Add any additional properties for the map, such as colours
        const mapData = map.features.map((d, i) => ({
          d: path(d),
          centroid: path.centroid(d),
          fill: i%5 === 0 ? fillOne : fillTwo // random colours
          
        }))
      
        // Function to draw the map with svg 
        const drawMap = (el) => {
          el.selectAll('path')
            .data(mapData)
            .join('path')
              .attr('d', d => d.d)
              .style('fill', d => d.fill)
              .style('stroke', '#fff')
              .style('stroke-width', 0.5)
        }
      
        // Function to draw the centroids of the map with svg 
        const drawCentroids = (el) => {
          el.selectAll('circle')
            .data(mapData)
            .join('circle')
              .attr('cx', d => d.centroid[0])
              .attr('cy', d => d.centroid[1])
              .attr('r', 2)
              .style('fill', '#fff')
        }
      
        const g = svg.append('g').classed('map', true)
        drawMap(g)
        drawCentroids(g) // uncomment to see the centroids
      
        return svg.node()
      }
    })
      

    

    //read data 


        
  return (
    <svg ref ={chartRef}/>
  );
}


