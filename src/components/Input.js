import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/*we could also do id = props.id 
    but using the spread opeartor the id is already embedded in 
    {..props.input}*/}
    </div>
  );
});
export default Input;

//component receives input data via props, spread operator used to passdown all data
// from the productList input to the Input component
// input form is used for all productlist items and helps us determine which item
// form element belongs to a particular product(food)
// when using a form, the for(label) and id(input) must have the same value
