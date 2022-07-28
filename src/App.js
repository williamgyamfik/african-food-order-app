import MainHeader from "./components/MainHeader";
import Modal from "./components/Modal";
import ProductPage from "./components/ProductPage";
import beans from "./Images/food_images/beansAndKorkor.jpg";
import jollof from "./Images/food_images/jollof.jpg";
import kenkayAndTilapia from "./Images/food_images/kenkayAndTilapia.jpg";
import tz from "./Images/food_images/tz.jpg";
import waakye from "./Images/food_images/waakye.jpg";
import { useState } from "react";
import CartProvider from "./components/CartProvider";

const foodItems = [
  {
    id: Math.random().toString(),
    name: "Waakye",
    description:
      "Beans with Rice and bi-carbonate. Goes with side sauce(shito) and main sauce (tomatoes sauce) with fish/chicken/egg/wele",
    img: waakye,
    price: 15,
  },
  {
    id: Math.random().toString(),
    name: "Tuo-zaafi",
    description:
      "Corn dough with soup and ayoyo sauce, goes with fish/chicken/wele",
    img: tz,
    price: 20,
  },
  {
    id: Math.random().toString(),
    name: "Jollof",
    description:
      "Rice mixed with sauce.Goes with side sauce(shito) and main sauce (tomatoes sauce) with fish/chicken/egg/wele",
    img: jollof,
    price: 25,
  },
  {
    id: Math.random().toString(),
    name: "Kenkay and Tilapia",
    description:
      "Corn dough. Goes with side sauce(shito) and main sauce (tomatoes sauce) with fish/chicken/egg/octopus",
    img: kenkayAndTilapia,
    price: 15,
  },
  {
    id: Math.random().toString(),
    name: "Beans and Korkor",
    description: "Black eyed beans with fried ripe plantain and palm oil",
    img: beans,
    price: 12,
  },
];

function App() {
  const [showCart, setHideCart] = useState(false);

  const showCartHandler = () => {
    setHideCart(!showCart); //changes the value to true and renders the Modal component
  };

  const removeCartHandler = () => {
    setHideCart(false); // changes the value to false upon initializing the close button
    // and renders the Modal component
  };
  return (
    <CartProvider>
      <MainHeader onShowCart={showCartHandler} />
      <ProductPage foodItems={foodItems} />
      {showCart && (
        <Modal onClick={removeCartHandler} onClose={removeCartHandler} />
      )}
    </CartProvider>
  );
}

export default App;
//logic here is that since useState() // is used to change the state here
// Modal component wont show because //we set its value to false. We are only
// interested in rendering when we click the // cart button for Modal to
// render an when we click the close button on modal // for modal to go off
