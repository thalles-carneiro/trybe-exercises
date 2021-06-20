const promise = new Promise((resolve, reject) => {
  const rndNumbers = [];
  for (let index = 0; index < 10; index += 1) {
    const rndNum = Math.floor((Math.random() * 50) + 1);
    rndNumbers.push(rndNum);
  };
  const sum = rndNumbers.map((number) => number ** 2).reduce((acc, curr) => acc + curr);
  (sum < 8000) ? resolve(sum) : reject(sum);
})
  .then((sum) => console.log(`Promise resolvida. Valor da soma: ${sum}`))
  .catch((sum) => console.log(`Promise rejeitada. Valor da soma: ${sum}`));

//GABARITO
// const fetchPromise = () => {
//   const myPromise = new Promise((resolve, reject) => {
//     const myArray = Array.from(
//       { length: 10 },
//       () =>  Math.floor(Math.random() * 50) + 1
//     );
//     const sum = myArray.map(number => number * number)
//                        .reduce((sum, number) => sum + number);

//     (sum < 8000) ? resolve() : reject();
//   });

//   myPromise
//     .then(() => console.log('Promise resolvida'))
//     .catch(() => console.log('Promise rejeitada'));
// };

// fetchPromise();