import React, { useState } from "react";
import './App.css';
import Child1 from "./Pages/Child1";
import Child2 from "./Pages/Child2";
import Child3 from "./Pages/Child3";
import Child4 from "./Pages/Child4";
import ChildDynamic from "./Pages/ChildDynamic";

const App = () => {
  const [add , setAdd] = useState()
  function showBox(){
    
  }
 
  return (
   <div className="main-container">
      <div className="parent">
        <div className="first_div">
        <Child1 showBox={showBox}/>
        <Child2/>
        </div>
        <div className="mid_div">
          <ChildDynamic/>
        </div>
        <div className="first_div">
        <Child3/>
        <Child4/>
        </div>
      </div>
   </div>
  )
}
export default App