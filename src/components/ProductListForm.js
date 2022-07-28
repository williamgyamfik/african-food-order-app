// import classes from ".ProductListForm.module.css";
import React from "react";
import Input from "./Input";
import { useRef, useState } from "react";
import classes from "./Input.module.css";

const ProductListForm = (props) => {
  const amountInputRef = useRef();
  const [validNumber, setValidNumber] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    //value is always a string so we need to convert to number
    const enteredAmountNmber = +enteredAmount;

    if (
      enteredAmountNmber.length === 0 ||
      enteredAmountNmber < 1 ||
      enteredAmountNmber > 5
    ) {
      setValidNumber(false);
      return;
    }
    props.onAddToCart(enteredAmountNmber);
  };

  return (
    // the add button in the form
    // submits the enteredAmountNmber which is passed as a props
    // to the parent component

    <form onSubmit={submitHandler}>
      <Input
        className={classes.formControl}
        ref={amountInputRef}
        label="Quatity"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          className: classes.formControl,
        }}
      />
      <button>+ Add</button>
      {!validNumber && <p>Please entere a valid number from 1-5</p>}
    </form>
  );
};

export default ProductListForm;
