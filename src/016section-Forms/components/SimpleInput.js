import { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {
  const inputNameRef = useRef(null);
  const [enteredName, setEnteredName] = useState('');
  const [enterNameIsValid, setEnterNameIsValid] = useState(false);
  const [enterNameTouched, setEnterNameTouched] = useState(false);

  useEffect(() => {
    if (enterNameIsValid) {
      console.log("name is Valid")
    }
  }, [enterNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnterNameIsValid(false)
      return;
    }

    setEnterNameTouched(true)
    setEnterNameIsValid(true)

    console.log(enteredName);

    // const enterValue = inputNameRef.current.value; - NEVER! SORRY MAN, do not manipulate in DOM
    // console.log(enterValue)
    setEnteredName('')
  }


  const nameInputIsValid = !enterNameIsValid && enterNameTouched;

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={inputNameRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
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
