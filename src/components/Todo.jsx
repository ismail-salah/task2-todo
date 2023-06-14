import React from 'react'

const Todo = (props) => {
  return (
    <div className='d-f'>

        <div>{props.todo.text} </div>
        <button className='delete-btn' onClick={props.ondelete}>x</button>
    </div>
  )
}

export default Todo