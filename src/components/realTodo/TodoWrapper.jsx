import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TodoWrapper = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p >{task.task}</p>
      <div className='todo-btn'>
      <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={()=> editTodo(task.id)}/> <nbsp/> 
      <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={()=> deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default TodoWrapper
