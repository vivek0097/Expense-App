import React from "react";
import CardItem from "./CardItem";
import "./expenceItem.css";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {
// const [title, setTitle] = useState(props.title);

// console.log("evoluated by react")
  //function clickHandler () {}  // we can assign like this also


// const clickHnadler = () => {
//   setTitle("updated !")
//   console.log(title)

// }



  return (
    <div className="container sec-one py-2 pb-0">
      <CardItem>
      <div className="expence mt-5">
        <div className="row  ">
          <div className="col-2  d-block justify-content-start mt-2 mb-2 pe-3 ps-5">
            <div className="date-box">
              <ExpenseDate date={props.date}/>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center mt-2 mb-2 pe-3">
            <h2 className="expence-title ps-4 p-3 ">{props.title}</h2>
            {/* <h2 className="expence-title ps-4 p-3 ">{title}</h2> */}
          </div>
          <div className="col-4 d-flex justify-content-end mt-3 mb-2 pe-5">
            <h2 className="expence-price d-flex justify-content-center pt-2  ">
              ₹{props.amount}
            </h2>
          </div>
        </div>
      </div>
      {/* <button onClick={clickHnadler}>Chnage title</button> */}
      </CardItem>
    </div>
    
  );
}

export default ExpenseItem;
