import { React, useContext } from "react";
import module from "./Modal.module.css";
import CartContext from "./CartContext";
import CartItems from "./CartItems";
import emptyCartLogo from "../Images/emptyCartLogo.png";

const BackDrop = (props) => {
  return (
    <div className={module.backdrop} onClick={props.onClose}>
      {props.children}
      {/* <Overlay /> */}
    </div>
  );
};

const Overlay = (props) => {
  const cartCtx = useContext(CartContext);

  const totalPrice = `$${cartCtx.totalPrice}`;
  const hasItems = cartCtx.items.length > 0;
  const noItems = cartCtx.items.length <= 0;

  // const [emptyCartImage,setEmptyCartImageValue] = useState(false)

  // const emptyCartHandlerImagehandler = () => {
  //   setEmptyCartImageValue(true)
  // }

  const cartItemAddHandler = (item) => {
    cartCtx.addItems({ ...item, quantity: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.remove(id);
  };
  console.log(cartCtx);

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        return (
          <CartItems
            name={item.name}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
            key={item.id}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            //using bind here because at this level the items are
            //already in the cart so the function needs to
            // receive specific arguments
            onAdd={cartItemAddHandler.bind(null, item)}
            // onAdd={()=>cartItemAddHandler(item)}
          />
        );
      })}
    </ul>
  );

  return (
    <>
      <div className={module["modal-content"]}>
        {cartItems}
        <span>{totalPrice}</span>
        <div>
          <button type="close" className={module.close} onClick={props.onClick}>
            Close
          </button>
          {hasItems && <button className={module.order}>Order</button>}
        </div>
        {noItems && <img src={emptyCartLogo} />}
        {noItems && <h2>No Items in cart</h2>}
      </div>
    </>
  );
};

const Modal = (props) => {
  return (
    <>
      <BackDrop onClick={props.onClose}>
        <Overlay onClick={props.onClick} />
      </BackDrop>
    </>
  );
};

export default Modal;
