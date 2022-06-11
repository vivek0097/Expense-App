import React from 'react'
import ExpenseItem from "./components/ExpenseItem";
// import './App.css'


function App() {
  const expenses = [
    {
      id:'e1',
      title: 'Car Insurance',
      amount: '1000/-',
      date: new Date(2022, 5, 25),
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
      date: new Date(2022, 5, 10),
    },
    {
      id:'e4',
      title: 'Bike',
      amount: '2536/-',
      date: new Date(2022, 5, 5),
    },
  ];
  return (
    <div className='App '>
   <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
   <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
   <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
   <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
  
    </div>
  );
}

export default App;
