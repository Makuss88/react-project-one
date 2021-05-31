import React from 'react';

import MealtItemForm from './MealItemForm';

import classes from './MealItem.module.css';

const MealItem = (props) => {

  const priceItem = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{priceItem}</div>
      </div>
      <div>
        <MealtItemForm id={props.id} />
      </div>
    </li>
  );

};

export default MealItem;