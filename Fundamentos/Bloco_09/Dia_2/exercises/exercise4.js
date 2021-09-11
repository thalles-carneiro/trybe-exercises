const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const rndNumbers = Array.from(
      { length: 10 },
      () => Math.floor((Math.random() * 50) + 1),
    );
    const sum = rndNumbers.map((number) => number ** 2)
      .reduce((acc, curr) => acc + curr);
    (sum < 8000) ? resolve(sum) : reject();
  });
  promise
    .then(sum => console.log([2, 3, 5, 10].map((number) => sum / number)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();