import React from 'react'
import UserDetails from './components/apiTodo/UserDetails'
import Todo from './components/realTodo/Todo'
import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Todo/>}/>
    <Route path='/APITodoList' element={<UserDetails />} />
    </Routes>
      
    </>
    
    
  )
}

export default App
