import classes from './CartItem.module.css'

import { useDispatch } from 'react-redux'
import { cardAction } from '../../store/cart-slice'

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item

  const dispatch = useDispatch()

  const addHandler = () => {
    dispatch(
      cardAction.addItemToCard({
        id,
        title,
        price,
      }),
    )
  }

  const removeHandler = () => {
    dispatch(cardAction.removeItemFromCard(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addHandler}>+</button>
          <button onClick={removeHandler}>-</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
