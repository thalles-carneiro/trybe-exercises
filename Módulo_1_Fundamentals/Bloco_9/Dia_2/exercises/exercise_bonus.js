const sumRndNumbers = () => {
  const rndNumbers = Array.from(
    { length: 10 },
    () => Math.floor((Math.random() * 50) + 1),
  );
  const sum = rndNumbers.map((number) => number ** 2)
    .reduce((acc, curr) => acc + curr);
  if (sum >= 8000) {
    throw new Error();
  }
  return sum;
}

const sumArrFromSum = (sum) => [2, 3, 5, 10].map((number) => sum / number)
  .reduce((acc, num) => acc + num);

const fetchPromise = async () => {
  try {
    const sum = await sumRndNumbers();
    const sumFromSum = await sumArrFromSum(sum);
  } catch(error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  };
};

fetchPromise();