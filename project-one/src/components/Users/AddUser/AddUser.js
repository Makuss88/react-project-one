import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModel from '../../UI/ErrorModal/ErrorModal';

import Wrapper from '../../Helper/Wrapper/Wrapper';

import classes from './AddUser.module.css';

const AddUser = props => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        messege: 'Please input good name and/or age! (not empty value)'
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid input age",
        messege: 'Age over 0!'
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    // console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  }

  const enteredUsernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandle = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          messege={error.messege}
          onConfirm={errorHandle}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>User Name</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={enteredUsernameHandler}
          />
          <label htmlFor='age'>Age</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={enteredAgeHandler} />
          <Button type='submit'>Add User, HURAY!</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;