import React from "react";
import classes from "./ProductPage.module.css";
import ProductListItems from "./ProductListItems";
import Card from "./Card";

const ProductPage = (props) => {
  // components receives the data
  //from App.js

  const itemList = props.foodItems.map((fooditem) => {
    return (
      <ProductListItems
        id={fooditem.id}
        key={fooditem.id}
        name={fooditem.name}
        image={fooditem.img}
        description={fooditem.description}
        price={fooditem.price}
      />
    );
  });

  return (
    <>
      <h1>Food items on our menu today</h1>
      <section className={classes.meals}>
        <Card>
          <ul>{itemList}</ul>
        </Card>
      </section>
    </>
  );
};

export default ProductPage;
