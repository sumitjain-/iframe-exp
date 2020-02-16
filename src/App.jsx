import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import ContentContainer from './ContentContainer/ContentContainer';

function App() {
  const [frameHeight, setFrameHeight] = useState();
  const [frameHeightTemp, setFrameHeightTemp] = useState();

  function flushFrameHeight() {
    setFrameHeight(frameHeightTemp);
  }

  return (
    <div className="App">
      <Sidebar
        frameHeightTemp={frameHeightTemp}
        setFrameHeightTemp={setFrameHeightTemp}
        flushFrameHeight={flushFrameHeight}
      />
      <ContentContainer
        frameHeight={frameHeight}
      />
    </div>
  );
}

export default App;
