import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue]= useState('');

    const handleSubmit= e =>{
        e.preventDefault();
        addTodo(value);
        setValue('');
    }
  return (
    <div>
      <form className='Todoform' onSubmit={handleSubmit}>
      <div className='input-btn-container'>
      <input className='todo-input' type='text' placeholder="What is the task today?" 
      onChange={(e) => setValue(e.target.value)} value={value} /> <nbsp/> <nbsp/>
      <button className='todo-btn' type='submit'>Add Task</button>
      </div>
      </form>
    </div>
  )
}

export default TodoForm
