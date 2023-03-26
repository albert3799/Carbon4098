import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './carosel slide1.png';
import image2 from './carosel slide2.png';
import { Teaser3Visual } from './components/teaser3';
import { Teaser2Visual } from './components/teaser2';
import { Teaser1Visual } from './components/teaser1';

const items = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
//   { title: 'Free Carbon allocations', description: 'free alocation in tones falling over time ' },
//   { title: 'Title 2', description: 'Description 2' },
//   { title: 'Title 3', description: 'Description 3' },
];

const data = [
    { month: "2008-01", price: 21.970909 },
    { month: "2008-02", price: 20.648571 },
    { month: "2008-03", price: 21.774211 },
    { month: "2008-04", price: 24.282727 },
    { month: "2008-05", price: 25.38619 },
    { month: "2008-06", price: 27.39381 },
    { month: "2008-07", price: 25.717826 },
    { month: "2008-08", price: 23.515714 },
    { month: "2008-09", price: 23.947273 },
    { month: "2008-10", price: 21.067391 },
    { month: "2008-11", price: 17.067 },
    { month: "2008-12", price: 15.102273 },
    { month: "2009-01", price: 12.788095 },
    { month: "2009-02", price: 9.5275 },
    { month: "2009-03", price: 11.289091 },
    { month: "2009-04", price: 13.021429 },
    { month: "2009-05", price: 14.606667 },
    { month: "2009-06", price: 13.289545 },
    { month: "2009-07", price: 13.834348 },
    { month: "2009-08", price: 14.657143 },
    { month: "2009-09", price: 14.159091 },
    { month: "2009-10", price: 14.118333 },
    { month: "2009-11", price: 13.560385 },
    { month: "2009-12", price: 13.502308 },
    { month: "2010-01", price: 12.993182 },
    { month: "2010-02", price: 12.891 },
    { month: "2010-03", price: 12.912609 },
    { month: "2010-04", price: 14.242857 },
    { month: "2010-05", price: 15.377619 },
    { month: "2010-06", price: 15.368182 },
    { month: "2010-07", price: 14.305385 },
    { month: "2010-08", price: 14.658519 },
    { month: "2010-09", price: 15.362083 },
    { month: "2010-10", price: 15.300476 },
    { month: "2010-11", price: 14.790455 },
    { month: "2010-12", price: 14.345 },
    { month: "2011-01", price: 14.328182 },
    { month: "2011-02", price: 14.7185 },
    { month: "2011-03", price: 16.036957 },
    { month: "2011-04", price: 16.565 },
    { month: "2011-05", price: 16.41 },
    { month: "2011-06", price: 15.118636 },
    { month: "2011-07", price: 12.55381 },
    { month: "2011-08", price: 12.164348 },
    { month: "2011-09", price: 11.702727 },
    { month: "2011-10", price: 10.300952 },
    { month: "2011-11", price: 9.238182 },
    { month: "2011-12", price: 7.492174 },
    { month: "2012-01", price: 6.914545 },
    { month: "2012-02", price: 8.460952 },
    { month: "2012-03", price: 7.628636 },
    { month: "2012-04", price: 6.947368 },
    { month: "2012-05", price: 6.677391 },
    { month: "2012-06", price: 7.162857 },
    { month: "2012-07", price: 7.485217 },
    { month: "2012-08", price: 7.5825 },
    { month: "2012-09", price: 7.734286 },
    { month: "2012-10", price: 7.8604 },
    { month: "2012-11", price: 7.465455 },
    { month: "2012-12", price: 6.630952 },
    { month: "2013-01", price: 5.19087 },
    { month: "2013-02", price: 4.593 },
    { month: "2013-03", price: 4.1015 },
    { month: "2013-04", price: 3.835238 },
    { month: "2013-05", price: 3.511739 },
    { month: "2013-06", price: 4.2515 },
    { month: "2013-07", price: 4.216522 },
    { month: "2013-08", price: 4.415455 },
    { month: "2013-09", price: 5.225238 },
    { month: "2013-10", price: 4.916522 },
    { month: "2013-11", price: 4.527727 },
    { month: "2013-12", price: 4.801905 },
    { month: "2014-01", price: 4.97087 },
    { month: "2014-02", price: 6.5095 },
    { month: "2014-03", price: 6.108571 },
    { month: "2014-04", price: 5.221 },
    { month: "2014-05", price: 5.116957 },
    { month: "2014-06", price: 5.581429 },
    { month: "2014-07", price: 5.94625 },
    { month: "2014-08", price: 6.255909 },
    { month: "2014-09", price: 6.015455 },
    { month: "2014-10", price: 6.087826 },
    { month: "2014-11", price: 6.865238 },
    { month: "2014-12", price: 6.9636 },
    { month: "2015-01", price: 6.972381 },
    { month: "2015-02", price: 7.266 },
    { month: "2015-03", price: 6.8 },
    { month: "2015-04", price: 7.093333 },
    { month: "2015-05", price: 7.440952 },
    { month: "2015-06", price: 7.461364 },
    { month: "2015-07", price: 7.730435 },
    { month: "2015-08", price: 8.083333 },
    { month: "2015-09", price: 8.099091 },
    { month: "2015-10", price: 8.384091 },
    { month: "2015-11", price: 8.507619 },
    { month: "2015-12", price: 8.280909 },
    { month: "2016-01", price: 6.8095 },
    { month: "2016-02", price: 5.150476 },
    { month: "2016-03", price: 4.932381 },
    { month: "2016-04", price: 5.691905 },
    { month: "2016-05", price: 5.961364 },
    { month: "2016-06", price: 5.603636 },
    { month: "2016-07", price: 4.63381 },
    { month: "2016-08", price: 4.686957 },
    { month: "2016-09", price: 4.314545 },
    { month: "2016-10", price: 5.701429 },
    { month: "2016-11", price: 5.639091 },
    { month: "2016-12", price: 5.208095 },
    { month: "2017-01", price: 5.246818 },
    { month: "2017-02", price: 5.485 },
    { month: "2017-03", price: 5.451739 },
    { month: "2017-04", price: 5.129444 },
    { month: "2017-05", price: 5.047826 },
    { month: "2017-06", price: 5.351364 },
    { month: "2017-07", price: 5.70619 },
    { month: "2017-08", price: 6.234348 },
    { month: "2017-09", price: 7.314762 },
    { month: "2017-10", price: 7.745909 },
    { month: "2017-11", price: 8.040909 },
    { month: "2017-12", price: 8.004211 },
    { month: "2018-01", price: 8.840455 },
    { month: "2018-02", price: 10.101500 },
    { month: "2018-03", price: 12.209048 },
    { month: "2018-04", price: 14.288500 },
    { month: "2018-05", price: 15.910000 },
    { month: "2018-06", price: 16.626667 },
    { month: "2018-07", price: 18.103636 },
    { month: "2018-08", price: 20.891739 },
    { month: "2018-09", price: 24.031000 },
    { month: "2018-10", price: 22.817826 },
    { month: "2018-11", price: 21.379545 },
    { month: "2018-12", price: 24.972632 },
    { month: "2019-01", price: 25.229091 },
    { month: "2019-02", price: 22.649500 },
    { month: "2019-03", price: 23.460952 },
    { month: "2019-04", price: 26.996500 },
    { month: "2019-05", price: 26.610870 },
    { month: "2019-06", price: 26.372000 },
    { month: "2019-07", price: 29.393478 },
    { month: "2019-08", price: 28.157273 },
    { month: "2019-09", price: 26.760952 },
    { month: "2019-10", price: 25.624348 },
    { month: "2019-11", price: 25.284762 },
    { month: "2019-12", price: 25.993333 },
    { month: "2020-01", price: 24.999091 },
    { month: "2020-02", price: 24.604500 },
    { month: "2020-03", price: 20.471818 },
    { month: "2020-04", price: 20.876000 },
    { month: "2020-05", price: 20.843333 },
    { month: "2020-06", price: 24.308636 },
    { month: "2020-07", price: 28.377826 },
    { month: "2020-08", price: 27.744762 },
    { month: "2020-09", price: 28.496818 },
    { month: "2020-10", price: 25.692727 },
    { month: "2020-11", price: 26.990000 },
    { month: "2020-12", price: 31.391818 },
    { month: "2021-01", price: 33.753000 },
    { month: "2021-02", price: 38.225500 },
    { month: "2021-03", price: 41.300000 },
    { month: "2021-04", price: 45.608095 },
    { month: "2021-05", price: 52.817619 },
    { month: "2021-06", price: 53.334091 },
    { month: "2021-07", price: 53.786364 },
    { month: "2021-08", price: 57.001818 },
    { month: "2021-09", price: 61.637273 },
    { month: "2021-10", price: 59.872381 },
    { month: "2021-11", price: 66.435455 },
    { month: "2021-12", price: 80.326522 },
    { month: "2022-01", price: 84.592857 },
    { month: "2022-02", price: 91.1815 },
    { month: "2022-03", price: 75.017391 },
    { month: "2022-04", price: 81.283158 },
    { month: "2022-05", price: 85.783182 },
    { month: "2022-06", price: 84.140909 },
    { month: "2022-07", price: 81.714762 },
    { month: "2022-08", price: 87.742609 },
    { month: "2022-09", price: 70.396818 },
    { month: "2022-10", price: 70.485238 },
    { month: "2022-11", price: 76.271818 },
    { month: "2022-12", price: 86.199524 },
    { month: "2023-01", price: 80.605 },
    { month: "2023-02", price: 90.012 },
    ]

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex,e) => {
    setIndex(selectedIndex);
  };

return (
   
      <Carousel activeIndex={index} onSelect={handleSelect} controls={true} wrap={false} style ={{height: "100%" ,width:"100%"}}>
        {/* Display the first two items as images that fill the screen */}
        {items.slice(0,2).map((item, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={item.src} alt={item.alt} style={{ objectFit: 'cover' , width: "80%", height:"80%"}} />
          </Carousel.Item>
        ))}

        {/* Display the next three items as div elements */}
        {/* {items.slice(2, 5).map((item, i) => ( */}
        {/* <Carousel.Item key={i + 2}> */}

        <Carousel.Item style={{height:"100%"}}>
            <Teaser3Visual data={data}/>
            <Carousel.Caption>
            <h3>Free carbon allocation in Tons</h3>
            <p>CFree carbon permits are falling rapidly in phases</p>
            </Carousel.Caption> 
        </Carousel.Item>

        <Carousel.Item style={{height:"100%"}}>
            <Teaser2Visual data={data}/>
            <Carousel.Caption>
            <h3>Carbon emmisions in Tons</h3>
            <p>Emissions under the scheme are falling even as new activities are added</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{height:"100%"}}>
            <Teaser1Visual data={data}/>
            <Carousel.Caption>
            <h3>Carbon prices in Ton</h3>
            <p>Carbon prices taking off as scheme expands</p>
            </Carousel.Caption>  
        </Carousel.Item>
        {/* ))} */}
      </Carousel>
  
  );
        }

export default CarouselComponent;


// return (
//     <div style={{ position: 'relative', height: '100%' }}>
//       <Carousel activeIndex={index} onSelect={handleSelect} controls={true} >
//         {/* Display the first two items as images that fill the screen */}
//         {items.slice(0,2).map((item, i) => (
//           <Carousel.Item key={i}>
//             <img className="d-block w-100" src={item.src} alt={item.alt} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, objectFit: 'cover' , width: "100%", height:"100%"}} />
//           </Carousel.Item>
//         ))}

//         {/* Display the next three items as div elements */}
//         {items.slice(2, 5).map((item, i) => (
//           <Carousel.Item key={i + 2}>
//             <div className="d-block w-100" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <h1>{item.title}</h1>
//               <p>{item.description}</p>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
// //     </div>
// //   );

// {/* <div style={{ position: 'relative', height: '100%' }}>
// <Carousel >
//   <Carousel.Item interval={3000}>
//     <img
//       // className="d-block w-100"
// src={image1}
// style={{objectFit: 'cover' , width: "100%", height:"100%"}}
//       alt="Image One"
//     />
//     <Carousel.Caption>
//       <h3>Label for first slide</h3>
//       <p>Sample Text for Image One</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item interval={3000}>
//     <img
//       className="d-block w-100"
// src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
//       alt="Image Two"
//     />
//     <Carousel.Caption>
//       <h3>Label for second slide</h3>
//       <p>Sample Text for Image Two</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// </div>
// ); */}