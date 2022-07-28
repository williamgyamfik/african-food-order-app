import React from "react";
import module from "./Card.module.css";

const Card = (props) => {
  return <div className={module["cardContainer"]}>{props.children}</div>;
};

export default Card;
