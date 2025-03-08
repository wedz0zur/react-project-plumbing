import React from "react";

import "./Choice.css";
import { Link } from "react-router-dom";

export const Choice = () => {
  return (
    <section className="section1">
      <div className="choice1">
        <div className="choice1_div">
        <Link to='Mixers'><div className="choice1_div1"></div></Link>
        <Link to='Shower_systems'><div className="choice1_div2"></div></Link>
        </div>
        <div className="choice1_div choice1_div_">
         <Link to='Spouts'><div className="choice1_div3"></div></Link>
         <Link to='Accessories'><div className="choice1_div4"></div></Link>
        </div>
      </div>
     <Link to='Shower_racks'><div className="choice2"></div></Link> 
    </section>
  );
};
