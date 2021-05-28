import React from 'react';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import imageMeals from '../../../assets/img/meals.jpg';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Makuss Meals!</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={imageMeals} alt="My inage of Meals!" />
      </div>
    </React.Fragment>
  );
};

export default Header;