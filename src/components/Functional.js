
import React , {useState} from 'react'


const Functional = () => {

  const [show, setShow] = useState(true)

  function clicktochange(){
    setShow(!show);
  }
  
    return (
  
      <div  >
        
        <button className='text2' onClick={ clicktochange}>To see styling in functional component</button>
 {
    
    show  ?  <div className='box1'> <h1 >This is Done using functional component</h1>
       <p style={{fontSize: "20px"}}>This is done using external css</p> 
       <p style={{color: "blue", fontSize:"20px"}}>This is done using inline css</p> </div> 
      : null
    
  } 
   
  </div>
  )
}

export default Functional
