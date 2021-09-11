import React, { useState, useEffect } from 'react';

const THREE = 3;
const FIVE = 5;
const FOUR_SECONDS = 4000;
const TEN_SECONDS = 10000;

export default function RandomNumber() {
  const [rndNum, setRndNum] = useState(null);
  const [intervalID, setIntervalID] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    (() => {
      const id = setInterval(() => {
        const randomNumber = Math.ceil(Math.random() * 100);
        console.log('O intervalo ainda está vivo');
        setRndNum(randomNumber);
      }, TEN_SECONDS);
      setIntervalID(id);
    })();
  }, []);

  useEffect(() => {
    if (rndNum && (rndNum % THREE === 0 || rndNum % FIVE === 0)) setMessage('Acerto');
    setTimeout(() => setMessage(''), FOUR_SECONDS);
  }, [rndNum]);

  useEffect(() => () => {
    clearInterval(intervalID);
  });

  return (
    <div>
      <p>{rndNum ? `Número gerado: ${rndNum}` : 'Gerando número...'}</p>
      {message}
    </div>
  );
}
