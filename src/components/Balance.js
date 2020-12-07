import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const Balance = () => {
    const{transactions} = useContext(GlobalContext)
    const amounts = transactions.map(item => item.amount)
    const total = amounts.reduce((acc, item)=>{acc += item
        return acc
    },0).toFixed(2)
    return (
        <React.Fragment>
            <h4>Your balance</h4>
    <h1 className="balance">${total}</h1>
        </React.Fragment>
    )
}
 
export default Balance
