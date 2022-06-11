import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className="date-txt">{month}</div>
      <div className="date-txt">{year}</div>
      <div className="date-txt">{day}</div>
    </div>
  );
}

export default ExpenseDate;
