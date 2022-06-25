import React, { useState } from "react";
import CardItem from "./CardItem";

import ExpenseFilter from "./NewExpense/ExpenseFilter";
import './expence.css'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHnadler = (selectedYear) => {
  
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});






  return (
    <div className="items-bg  ">
      <li className="list-unstyled">
      <CardItem>
        <ExpenseFilter
        className="mt-5"
           selected={filteredYear}
          onChnageFilter={filterChangeHnadler}
        />
     <ExpensesChart expenses={filteredExpenses} />
       <ExpensesList items={filteredExpenses} />
        
      </CardItem>
      </li>
    </div>
  );
}

export default Expense;
