import React, { useContext } from "react";
import module from "./CartButton.module.css";
import CartContext from "./CartContext";

const CartButton = (props) => {
  const cartCntx = useContext(CartContext);

  const totalItems = cartCntx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <div className={module["align-img"]}>
      <button className={module["button-control"]} onClick={props.onClick}>
        Cart
        <span> ({totalItems})</span>
      </button>
    </div>
  );
};

export default CartButton;
