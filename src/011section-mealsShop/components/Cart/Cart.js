import React, { Fragment, useContext, useState } from "react";

// import Wrapper from '../Helper/Wrapper';
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";

const BASE_URL =
  "https://react-makuss-default-rtdb.europe-west1.firebasedatabase.app/orders.json";

const Cart = (prosp) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSumbmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemovehandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemovehandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const onSubmitHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });

    setIsSubmitting(false);
    setDidSumbmit(true);
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={prosp.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const isSubmittingModalContent = <p>Sneding Your Order!</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfuly sent your order!</p>
      <div className={classes.actions}>
        <button className={classes["button"]} onClick={prosp.onHideCart}>
          Close
        </button>
      </div>
    </Fragment>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount </span>
        <span> {totalAmount} </span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={onSubmitHandler} onCancel={prosp.onHideCart} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  return (
    <Modal onHideCart={prosp.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
