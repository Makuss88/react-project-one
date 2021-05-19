import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';

import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />
};

const Overlay = (props) => {
  return (
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
  )
}

const ErrorModel = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          messege={props.messege}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  )
}

export default ErrorModel;