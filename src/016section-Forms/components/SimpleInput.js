import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enterNameTouched, setEnterNameTouched] = useState(false);

  const enterNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enterNameIsValid && enterNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnterNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnterNameTouched(true);

    if (!enterNameIsValid) {
      return;
    }
    setEnteredName('');
    setEnterNameTouched(false);
  }

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsValid && <p className="error-text">SORRY MAN!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
