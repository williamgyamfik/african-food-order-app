import React from "react";
import { useContext } from "react";
import ProductListForm from "./ProductListForm";
import CartContext from "./CartContext";
import classes from "./ProductListItems.module.css";

const ProductListItems = (props) => {
  //component that displays data but we import it to
  //ProductListItems which then import to App.js for display

  const cartCtx = useContext(CartContext);
  const onAddToCartHandler = (enteredAmount) => {
    const item = {
      id: props.id,
      name: props.name,
      totalPrice: props.price,
      quantity: enteredAmount,
    };

    cartCtx.addItems(item);
  };

  // Calling a function from a differtent component

  //item from addItemHandler == object from addItems
  return (
    <>
      <li className={classes.meals}>
        <div>
          <h2> {props.name}</h2>
          <div className={classes.price}>Price {"$" + props.price}</div>
          <ProductListForm onAddToCart={onAddToCartHandler} />
        </div>
        <img src={props.image} alt="some-imag" />
        {/* <div className={classes.image_control}>
        </div> */}
      </li>
    </>
  );
};
export default ProductListItems;

// <div className="product_container">
// <div className="product_items">
//   <h2> {props.name}</h2>
//   <p>Price {"$" + props.price}</p>
//   <ProductListForm onAddToCart={onAddToCartHandler} />
// </div>
// <div className="product_item_image">
//   <img src={props.image} alt="some-imag" />
// </div>
// </div>
