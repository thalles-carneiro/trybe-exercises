const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (param1, param2) => {
  let total = 0;
  for (let index = 0; index < param1.length; index += 1) {
    if (param2[index] !== 'N.A') {
      (param1[index] === param2[index]) ? total += 1 : total -= 0.5;
    }
  }
  return total;
};

const score = (template, answers, callback) => {
  const result = callback(template, answers);
  return `O estudante acertou ${result} questões.`;
};

console.log(score(rightAnswers, studentAnswers, checkAnswers));