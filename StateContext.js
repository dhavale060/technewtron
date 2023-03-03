import React, { useState } from 'react';
import NoteContext from "./Context/ContextApi";

function StateContext(props) {
    const [dyn , setDyn] = useState("");
  return (
    <NoteContext.Provider value = {{dyn , setDyn }}>
     {props.children}
    </NoteContext.Provider>
  )
}

export default StateContext
