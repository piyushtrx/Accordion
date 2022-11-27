import React, { useState } from 'react'
import "./accordion.css"

 const Accordion = ({first,last,dob,gender,country,description}) => {
    const [show,setShow]=useState(true);
  return (
    <>
     <div className='main-heading'>
        <h1>{first} {last}<span className='spa'>➕</span></h1>
       
     </div>
     <div className='sub-div'>
        {
            show && <p>{dob }</p>
        }   
     </div>
    {show && <p>{description}</p>}
    </>
   
  )
}
export default Accordion;
