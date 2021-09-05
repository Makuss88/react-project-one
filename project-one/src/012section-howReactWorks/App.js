import React, { useCallback, useState } from 'react';

import Button from './components/UI/Button/Button'

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

const App = () => {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  };

  console.log("App");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler} className={"button"}>maybe toggle??</Button>
      <Button onClick={toggleParagraphHandler} className={"button"}>Toggle paragraph</Button>
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
