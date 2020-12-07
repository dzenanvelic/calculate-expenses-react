import React from 'react'
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {TransactionsList} from './components/TransactionsList'
import {AddTransactions} from './components/AddTransactions'
import IncomeExpenses from './components/IncomeExpenses'

function App() {
  return (<div>

    <Header/>
    <div className="container">
      <Balance/>
<IncomeExpenses/>
<TransactionsList/>
<AddTransactions/>
    </div>
  </div>
  );
}
 
export default App;
