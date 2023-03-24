import React, { useState, useEffect,useRef } from 'react';
import { Vis11 } from '../../Vis11';
import { Vis7 } from '../../Vis7';
import {Vis4} from "../../Vis4";

export function  VisualDisplay ({sHeight,sWidth})  {

  

  return (
    <div style={{ width:800, height: 700}}>
     <Vis11 sWidth="800" sHeight="700" />
    </div>

  );
};








