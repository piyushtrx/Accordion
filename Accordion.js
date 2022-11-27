import React, { useState } from 'react'
import "./accordion.css"

 const Accordion = ({first,last,dob,gender,country,description}) => {
    const [show,setShow]=useState(false);
  return (
    <>
     <div className='main-heading'>
        <h1>{first} {last}<span onClick={()=>setShow(!show)}>➕</span></h1>
       
     </div>
     <div className='sub-div'>
        {
         show && <p className='age'>Age<span className='gender'>Gender</span><span>Country</span><br/><span className='dob'>{dob} </span ><span className='g'>{gender}</span><span className='country'> {country}</span>   </p>
            
      
        }   
             </div>
    {show && <p>{description}</p>}
    </>
   
  )
}
export default Accordion;
