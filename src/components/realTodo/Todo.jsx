//wrapper
import React, { useState } from 'react'
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import TodoWrapper from './TodoWrapper';
import EditTodo from './EditTodo';
uuidv4();

const Home = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todoo => {
    setTodos([...todos, { id: uuidv4(), task: todoo, completed: false, isEditing: false }])
    console.log(todos)
  }

  const deleteTodo= id=>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  const editTodo= id=>{
    setTodos(todos.map(todo=>todo.id === id ? 
    {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask =(task, id)=>{
    setTodos(todos.map(todo=> todo.id===id?{
      ...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <Wrapper>
      <div className='main'>
        <div className="search-bar">
          <input className="input-field" type="text" placeholder="Type to search" />
          <button className="input-filed-icon" ><BiSearch /></button>
        </div>
      </div>

      <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          todo.isEditing ?(<EditTodo editTodo={editTask} task={todo}/>) : (
          <TodoWrapper task={todo} key={index}
          deleteTodo={deleteTodo} editTodo={editTodo}/>)
        ))}

      </div>
    </Wrapper>

  )
}


const Wrapper = styled.section`

.main{
    display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 768px) {
    .main {
      flex-direction: column;
      text-align: center;
    }
  }

.search-bar{
    height:35px;
    border-radius: 20px;
    border: transparent;
    outline: none;
    background-color: lightgray;
    margin-bottom: 20px;
    width: 250px
  }
  .input-field{
    position: relative;
    padding-top: 10px;
    border: transparent;
    outline: none;
    background-color: lightgray;
    width: 70%;
    padding-right:10px;
  }
  .input-filed-icon{
    position: absolute;
    padding-top: 8.5px;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;
  }
`
export default Home
