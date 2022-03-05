import classes from './CartButton.module.css'
import { useSelector, useDispatch } from 'react-redux'

import { uiAction } from '../../store/ui-slice'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const howMany = useSelector((state) => state.card.totalQuantity)
  const showHandler = () => {
    dispatch(uiAction.toggle())
  }

  return (
    <button className={classes.button} onClick={showHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{howMany}</span>
    </button>
  )
}

export default CartButton
