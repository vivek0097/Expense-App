import React, { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // -xxxx-------->  or  we  can use multiple state or single state

  // const [userInput, setUserInput] = useState({
  // enteredTitle: '',
  // enteredAmount: '',
  // enteredDate: ''

  // })

  const titleChnageHandler = (event) => {
    setEnteredTitle(event.target.value);
    //-------second aprroch---------
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,

    // })

    //-------third aprroch---------
    // setUserInput((prevState) =>{
    //    return { ...prevState, enteredTitle: event.target.value}

    // })
  };

  const amountChnageHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,

    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,

    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData)
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChnageHandler}
            required
          />
        </div>
        <div className="new-expense__controls">
          <label>Ammount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChnageHandler}
            required
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
