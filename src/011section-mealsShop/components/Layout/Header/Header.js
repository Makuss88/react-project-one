import {Fragment} from 'react';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import imageMeals from '../../../img/meals.jpg';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Makuss Meals!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={imageMeals} alt="My inage of Meals!" />
      </div>
    </Fragment>
  );
};

export default Header;