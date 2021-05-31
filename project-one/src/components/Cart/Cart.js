import React from 'react';
// import Wrapper from '../Helper/Wrapper';
import Modal from '../UI/Modal/Modal';

import classes from './Cart.module.css';

const Cart = (prosp) => {
  const cartItems = (
    <ul className={classes['cart-items']}>{[
      { id: 'c1', name: "susi", amount: 2, price: 16.16 }
    ].map((item) => <li>{item.name}</li>)}</ul>
  );

  return (
    <Modal onHideCart={prosp.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount </span>
        <span> 32.32 </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={prosp.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;