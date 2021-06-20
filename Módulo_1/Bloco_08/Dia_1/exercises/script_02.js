const betCheck = (myNum, rndNum) => myNum === rndNum;

const prizeDraw = (betNum, callback) => {
  const randomNum = Math.floor((Math.random() * 5) + 1);
  console.log(randomNum);
  const result = callback(betNum, randomNum) ? 'Parabéns você ganhou! :D' : 'Tente novamente =p';
  return result;
};

console.log(prizeDraw(4, betCheck));