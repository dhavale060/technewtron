import React,{useContext, useState} from 'react';
import ContextApi from '../Context/ContextApi';
import '../App.css';

function ChildDynamic() {
   const {dyn} = useContext(ContextApi);
   console.log(dyn);
//    const [add , setAdd] = useState("child") 
  return (
    <div className = {`child_spec ${dyn}`}>
      {/* <h2>Child Dynamic</h2> */}
    </div>
  )
}

export default ChildDynamic
