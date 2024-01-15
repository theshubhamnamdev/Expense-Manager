import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import ExpenseSection from './components/ExpenseSection'
import ListGroup from './components/ListGroup'

const App = () => {
  
  const [todos , setTodos] = useState([
    { id : 1 , text : "Salary" , amount : 100000},
    { id : 2 , text : "Rent" , amount : -15000},
    { id : 3 , text : "commission" , amount : 25000},
    { id : 4 , text : "shoping", amount : -12000},


  ])

  const savetodo = (text , amount)=>{
    const newli = {
      id : crypto.randomUUID(),
      text: text ,
      amount : +amount
    }
    setTodos([newli , ...todos])
  }

  const deletetodo = (id)=>{
    setTodos(todos.filter(todo=> todo.id !==id))
  }
  
  return (
    <>
    <Navbar/>
    <div className="container">
      <MainSection todos={todos} savetodo={savetodo}/>
      <ExpenseSection todos={todos} />
     <ListGroup todos={todos} deletetodo={deletetodo}/>
    </div>
    </>
  )
}

export default App