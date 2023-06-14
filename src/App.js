import React, { useState } from 'react'
import Todoform from './components/Todoform'
import Todo from './components/Todo';


const App = () => {

let [todos , settodos ] = useState([]);
const addtodo =(todo)=>{
settodos([todo, ...todos])
};



const handledelete = (id)=>{
  settodos(todos.filter(todo=>todo.id!==id))
}



  return (


    <div className='container'>

<Todoform onsubmit={addtodo} />
{
  todos.map((todo)=>(
    <Todo key={todo.id} todo={todo} ondelete={()=> handledelete(todo.id)} />
  ))
}

    </div>
  )
}

export default App