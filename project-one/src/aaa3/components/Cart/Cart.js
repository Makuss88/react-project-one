import React, { useContext } from 'react';

// import Wrapper from '../Helper/Wrapper';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import CartContext from '../store/cart-context';

import classes from './Cart.module.css';

const Cart = (prosp) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemovehandler = id => {
    cartCtx.removeItem(id)
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemovehandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)} />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={prosp.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount </span>
        <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={prosp.onHideCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;