import { React } from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  //notice the two parameters passed as arguments in the cartReducer function
  // one declares the initial state and the other performs an
  // action based on dispatchAction

  // the likage lies between the cartState which has a value of cartReducer constant
  // then we use the dispatchAction to verify the condition set
  //for add/remove handlers
  if (action.type === "ADD") {
    // const updatedItems = state.items.concat(action.item);
    const newTotalPrice =
      state.totalPrice + action.item.quantity * action.item.totalPrice;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id == action.item.id
    );

    const newExistingCartItem = state.items[existingCartItemIndex]; // gives the item at a particular index
    console.log(newExistingCartItem);

    let updatedItems;
    if (newExistingCartItem) {
      const updatedItem = {
        ...newExistingCartItem,
        quantity: newExistingCartItem.quantity + action.item.quantity,
      };

      console.log(updatedItem);
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; // at index put updatedItem into updatedItems
    } else {
      updatedItems = state.items.concat(action.item);
    }
    console.log(updatedItems);

    //CHECK HERE
    return {
      items: updatedItems,
      totalPrice: newTotalPrice, // Return the updated values based on action parameter
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    console.log(existingCartItemIndex);
    const newExistingCartItem = state.items[existingCartItemIndex];
    const newTotalPrice = state.totalPrice - newExistingCartItem.totalPrice;

    if (newExistingCartItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...newExistingCartItem,
        quantity: newExistingCartItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalPrice: newTotalPrice,
    };
  }
  return defaultCartState; //return if nothing happens. Thus no update of the state
};

//why create a reducer in the cartProvider component and not the
//form component

const CartProvider = (props) => {
  //inside the CartProvider component we need the add/remove actions
  // and the final values for total price and amount to be displayed
  //Question? Why cant we provide the values for the cartContext object
  // from the CartProvider component
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItems: addItemHandler,
    remove: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
