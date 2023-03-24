import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Visuals} from "./screens/Visuals";
import { LandingPage } from "./screens/LandingPage";
import { Teaser1Visual } from "./components/teaser1";
import { VisualDisplay } from "./screens/Visuals/visualDisplay";
import { MyScrollView } from "./Scroll";
import { VisualsA } from "./screens/Visuals/VisualsA";
import { VisualsV } from "./screens/Visuals/VisualsV";
import { Vis11 } from "./Vis11";
import { VisualsT } from "./screens/Visuals/VisualsT";


const router = createBrowserRouter([
  {
    path: "/*",
    element: <LandingPage/>,
  },
  {
    path: "/visualsv",
    element: <VisualsV/>,
  },
  {
    path: "/visualsA",
    element: <VisualsA/>,
  },
  {
    path: "/visualsT",
    element: <VisualsT/>,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};



export default App;
