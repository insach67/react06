import React, {useState} from 'react'

export default function Classes() {

const [show, setShow] = useState(true)


function tochangeclick(){
  setShow(!show);
}


  return (

    <div >
     
      <button className='text3' onClick={ tochangeclick}>To see styling in class component</button>
   {
  
  show  ?  <div className='box2'> <h1 >This is Done using class component</h1>
     <p style={{ fontSize:"20px"}}>This is done using external css</p> 
     <p style={{color: "blue", fontSize:"20px"}}>This is done using inline css</p> </div> 
    : null
  
}

      
      
 

    </div>
  )
}

