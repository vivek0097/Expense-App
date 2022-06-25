import React,{useState} from 'react'
import Expense from './components/Expense';
import NewExpense from './components/NewExpense/NewExpense';

// import './App.css'
const DUMY_EXPENSES = [
  {
    id:'e1',
    title: 'Car Insurance',
    amount: '1000/-',
    date: new Date(2020, 5, 25),
  },
  {
    id:'e2',
    title: 'new Phone',
    amount: '4521/-',
    date: new Date(2022, 4, 22),
  },
  {
    id:'e3',
    title: 'Watch',
    amount: '1000/-',
    date: new Date(2020, 5, 10),
  },
  {
    id:'e4',
    title: 'Bike',
    amount: '2536/-',
    date: new Date(2021, 5, 5),
  },
  {
    id:'e5',
    title: 'Book',
    amount: '2536/-',
    date: new Date(2021, 5, 10),
  },
  {
    id:'e6',
    title: 'watch',
    amount: '5006/-',
    date: new Date(2022, 4, 5),
  },
  {
    id:'e7',
    title: 'Bike',
    amount: '253226/-',
    date: new Date(2022, 5, 5),
  },
];

function App() {
 
  const [expenses, setExpenses] = useState(DUMY_EXPENSES);

const addExpenseHandler = (expense) => {

// console.log(expense)
setExpenses(prevExpenses => {
  return [expense, ...prevExpenses]
});
}


  return (
    <div className='App '>
      <NewExpense  onAddExpense={addExpenseHandler}/>
     <Expense  items={expenses}/>
    </div>
  );
}

export default App;
