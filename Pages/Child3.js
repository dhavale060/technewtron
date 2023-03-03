import React, { useContext } from 'react';
import ContextApi from '../Context/ContextApi';
import '../App.css';

function Child3() {
    const {setDyn} = useContext(ContextApi);
  return (
    <div className='child' onClick={() => setDyn("for_grow")}>
      <h2>Child 3</h2>
    </div>
  )
}

export default Child3
