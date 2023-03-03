import React, { useContext } from 'react';
import ContextApi from '../Context/ContextApi';
import '../App.css';

function Child2() {
    const {setDyn} = useContext(ContextApi);
  return (
    <div className='child' onClick={() => setDyn("for_shrink")}>
      <h2>Child 2</h2>
    </div>
  )
}

export default Child2
