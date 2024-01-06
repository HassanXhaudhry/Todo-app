import React,{useState} from 'react'

const EditTodo = ({editTodo, task}) => {
    const [value, setValue]= useState(task.task);

    const handleSubmit= e =>{
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
    }
  return (
    <div>
      <form className='Todoform' onSubmit={handleSubmit}>
      <input className='todo-input' type='text' placeholder='Update your task'
      onChange={(e) => setValue(e.target.value)} value={value} /> <nbsp/> 
      <button className='todo-btn' type='submit'>Update Task</button>
      </form>
    </div>
  )
}

export default EditTodo;
