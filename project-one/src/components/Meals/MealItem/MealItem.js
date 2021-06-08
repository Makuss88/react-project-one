import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import MealtItemForm from './MealItemForm';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const priceItem = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{priceItem}</div>
      </div>
      <div>
        <MealtItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );

};

export default MealItem;