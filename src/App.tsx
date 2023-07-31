// import { useState } from 'react'
import './App.css'
import Todolist from './components/Todolist'

const App = () => {
  const myStyle = {
    color: "Black",
    backgroundColor: "Pink",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
     <h1 style={myStyle}>To Do List</h1>
     <Todolist/>
    </>
  )
}

export default App
