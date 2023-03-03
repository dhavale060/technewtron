import React, { useContext } from 'react';
import '../App.css';
import ContextApi from '../Context/ContextApi';
import '../App.css';

function Child1({showBox}) {
    const {setDyn} = useContext(ContextApi);
  return (
    <div className='child' onClick={() => setDyn("for_show")}>
      <h2>Child 1</h2>
    </div>
  )
}

export default Child1
