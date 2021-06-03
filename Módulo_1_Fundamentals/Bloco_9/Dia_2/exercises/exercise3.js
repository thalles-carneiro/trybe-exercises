const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const rndNumbers = Array.from(
      { length: 10 },
      () => Math.floor((Math.random() * 50) + 1),
    );
    const sum = rndNumbers.map((number) => number ** 2)
      .reduce((acc, curr) => acc + curr);
    (sum < 8000) ? resolve(sum) : reject(sum);
  });
  promise
    .then(sum => console.log([2, 3, 5, 10].map((number) => sum / number)))
    .catch(sum => console.log(`Promise rejeitada. Valor da soma: ${sum}`));
};

fetchPromise();