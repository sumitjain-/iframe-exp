import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import ContentContainer from './ContentContainer/ContentContainer';

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (event.origin !== 'http://localhost:8080') { return; }
  console.log(event.origin);
  console.log(event.data);
}

function App() {
  const [frameHeight, setFrameHeight] = useState();
  const [frameHeightTemp, setFrameHeightTemp] = useState();
  const [frameHeightFinal, setFrameHeightFinal] = useState(0);

  function flushFrameHeight() {
    setFrameHeight(frameHeightTemp);
  }

  useEffect(() => {
    function receiveMessage(event) {
      if (event.origin !== 'http://localhost:8080') { return; }
      console.log(event.origin);
      console.log(event.data);
      setFrameHeightFinal(parseFloat(event.data));
    }
    window.addEventListener("message", receiveMessage, false);
    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, [])

  return (
    <div className="App">
      <Sidebar
        frameHeightTemp={frameHeightTemp}
        setFrameHeightTemp={setFrameHeightTemp}
        flushFrameHeight={flushFrameHeight}
      />
      <ContentContainer
        frameHeight={frameHeight}
        frameHeightFinal={frameHeightFinal}
      />
    </div>
  );
}

export default App;
