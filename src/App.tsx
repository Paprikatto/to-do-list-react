import { useState } from 'react'
import { data } from './Data'
import './App.css'
import ToDoList from './components/ToDoList'



function App() {


  return (
    <div className="App">
      <h1>To do list</h1>
      <ToDoList />
    </div>
  )
}

export default App
