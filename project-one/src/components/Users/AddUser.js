import React from 'react';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

import classes from './AddUser.module.css';

const AddUser = props => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>User Name</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' />
        <Button>Add User, HURAY!</Button>
      </form>
    </Card>
  );
};

export default AddUser;