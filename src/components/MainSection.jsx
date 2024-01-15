import React, { useState } from 'react'

const MainSection = ({todos , savetodo}) => {
 
  const [text , setText] = useState("")
  const [amount , setAmount] = useState("")


  const balance = todos.reduce((p,c)=>{
    return p+ c.amount
  } , 0)


  const handleSubmit = (e)=>{
    e.preventDefault()
    savetodo(text , amount)
    setAmount("")
    setText("")
  }
 
  return (
    <div className="main-section">
      <div id="current-bal" className="balance">
        <span>
          <p>Current Balance</p>
          <h1>₹{balance}</h1>
        </span>
        <i className="fa-solid fa-wallet"></i>
      </div>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Transaction"
        onChange={(e)=>setText(e.target.value)}
       
        />
        <input
          type="number"
          placeholder="Enter Amount"
          onChange={(e)=>setAmount(e.target.value)}
         
        />
        <button>
          Save Transaction<i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  )
}

export default MainSection