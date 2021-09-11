import React, { useEffect, useState } from 'react';
import RandomNumber from './components/RandomNumber';

const THIRTY_SECONDS = 30000;

function App() {
  const [timerOn, setTimerOn] = useState(true);

  useEffect(() => {
    (() => {
      setTimeout(() => {
        setTimerOn(false);
      }, THIRTY_SECONDS);
    })();
  }, []);

  return (timerOn && <RandomNumber />);
}

export default App;
