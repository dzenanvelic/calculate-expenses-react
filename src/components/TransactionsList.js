import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from '../components/Transaction'
export const TransactionsList = () => {
  const{transactions} = useContext(GlobalContext)
 
    return (
        <React.Fragment>
              <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item)=>{
          return   <Transaction key={item.id}item={item}{...item}/>
      
        })}
        </ul>
        
        </React.Fragment>
    )
}
