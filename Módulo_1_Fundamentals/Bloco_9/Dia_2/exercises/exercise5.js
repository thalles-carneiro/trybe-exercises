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
    .then(sum => [2, 3, 5, 10].map((number) => sum / number))
    .then(array => array.reduce((acc, num) => acc + num))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();