import React from 'react';

import Card from '../Card/Card';
import Button from '../Button/Button';

import classes from './ErrorModal.module.css';

const ErrorModel = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.messege}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>okey</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModel;