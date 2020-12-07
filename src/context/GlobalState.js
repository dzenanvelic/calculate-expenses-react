import React,{createContext,  useReducer,useEffect} from 'react'
import AppReducer from './AppReducer'
// initial state
const initialState ={
transactions:[

  ]
}
function getExpensesFromLocalStorage(){
    return localStorage.getItem('expenses')?JSON.parse(localStorage.getItem('expenses')):[]
}
// Create context

 const GlobalContext = createContext()

// Provider componentrs
 const GlobalProvider = ({children})=>{
     const [state, dispatch] = useReducer(AppReducer, getExpensesFromLocalStorage())

console.log(state);


     //local storage
useEffect(()=>{
localStorage.setItem('expenses',JSON.stringify(state))
},[state])

//Actions
function deleteTransaction(id){
    dispatch({
        type:'DELETETRANSACTION',
        payload:id
    })
}
function addTransaction(item){
    dispatch({
        type:'ADDTRANSACTION',
        payload:item
    })
}
return (
    <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>{children}</GlobalContext.Provider>
)
    
}




export {GlobalProvider,GlobalContext};