import React, {  useState } from 'react'
import shortid from "shortid";

const Todoform = (props) => {

    
    const [text , setText] = useState("");

 
     const handlesubmit =(e) =>{
        e.preventDefault();

        props.onsubmit({
            id : shortid.generate(),
            text : text ,
            completed : false
            
        })
    };

  
  return (
    <form onSubmit={handlesubmit} >
        <input 
         type="text"
         className='input-field' 
         onChange={(e)=>setText(e.target.value)} 
         value={text}/>

         <button className='btn' onClick={handlesubmit}>add</button>
    </form>
  )
}

export default Todoform