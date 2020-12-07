export default (state, action)=>{
    switch(action.type){
        case 'DELETETRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transaction =>transaction.id !== action.payload)
            }
            case 'ADDTRANSACTION':
                return{
                    ...state,
                    transactions: [action.payload,...state.transactions]
                }
        default:
            return state
    }
}