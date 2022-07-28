import React from "react";
import "./MainHeader.css";
import { Fragment } from "react";
import Logo from "../Images/Logo/logo.png";
import CartButton from "./CartButton";

const MainHeader = (props) => {
  return (
    <Fragment>
      <header>
        <a className="img-align" href="/">
          <img className="image-element" src={Logo} alt="logo goes here" />
        </a>
        <div className="menu-align">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
          </ul>
        </div>
        <CartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default MainHeader;
