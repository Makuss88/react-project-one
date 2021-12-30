// import { useState } from 'react';

import useInput from '../hooks/useInput';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enterNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enterEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes('@'));

  // const [enteredName, setEnteredName] = useState('');
  // const [enterNameTouched, setEnterNameTouched] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enterEmailTouched, setEnterEmailTouched] = useState(false);

  // const [formIsValid, setFormIsValid] = useState(false);

  // const enterNameIsValid = enteredName.trim() !== '';
  // const nameInputIsValid = !enterNameIsValid && enterNameTouched;
  // const enterEmailIsValid = enteredEmail.includes('@') !== '';
  // const emailInputIsValid = !enterEmailIsValid && enterEmailTouched;

  let formIsValid = false;
  if (enterNameIsValid && enterEmailIsValid) {
    formIsValid = true;
  }  // this code is smiler and maybe more comfortable?

  // useEffect(() => {
  //   if (enterNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enterNameIsValid])

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // }

  // const nameInputBlurHandler = (event) => {
  //   setEnterNameTouched(true);
  // }

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // }

  // const emailInputBlurHandler = (event) => {
  //   setEnterEmailTouched(true);
  // }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnterNameTouched(true);
    // setEnterEmailTouched(true);
    if (!enterNameIsValid && !enterEmailIsValid) {
      return;
    }
    // setEnteredName('');
    // setEnterNameTouched(false);
    // setEnteredEmail('');
    // setEnterEmailTouched(false);

    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">SORRY MAN! NAME!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">SORRY MAN! E-mail!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
