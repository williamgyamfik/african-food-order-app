import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItems: (items) => {},
  removeItems: (id) => {},
});

export default CartContext;
