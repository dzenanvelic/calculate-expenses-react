import React,{useState,useEffect,useReducer,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const AddTransactions = () => {
   const{addTransaction} = useContext(GlobalContext, addTransaction)
    const [text, setText]= useState([])
    const[amount,setAmount]= useState(0)
// Generate random ID
const randomNumber = Math.floor(Math.random()* 129054684)
console.log(randomNumber);
    const onSubmit = (e)=>{
      e.preventDefault()
      const newTransaction = {
        id:randomNumber,
        text,
        amount:+amount
      }
      addTransaction(newTransaction)
    }
    return (
        <React.Fragment>
             <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  placeholder="Enter text..."value={text}onChange={(e)=>{setText(e.target.value)}} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive + income)</label
          >
          <input type="number"  placeholder="Enter amount..." value={amount}onChange={(e)=>{setAmount(e.target.value)}}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
      <br/>
      <p className="name"> byDzenan-2020</p>
        </React.Fragment>
    )
}
