import React, { useState } from 'react'
import {obj1} from "./api"
import Accordion from "./Accordion"

 const Deatils = () => {
    const [data,setData]=useState(obj1);
  return (
    <section className='main-div'>
        {
            data.map((record)=>{
return <Accordion key={record.id} {...record}/>;
            })
        }
    </section>
  )
}
export default Deatils;
