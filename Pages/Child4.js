import React, { useContext } from 'react';
import ContextApi from '../Context/ContextApi';
import '../App.css';

function Child4() {
 const {setDyn} = useContext(ContextApi);
  return (
    <div className='child' onClick={() => setDyn("for_hide")}>
      <h2>Child 4</h2>
    </div>
  )
}

export default Child4
