import readlineSync from 'readline-sync';

export const randomInteger = (min, max) => {
  const num = min + Math.random() * (max + 1 - min);
  return Math.floor(num);
};

export const gameParts = (name, question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    return answer;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}`);
  return 'finish';
};

export const mathOperation = (firstNum, secondNum, operator) => {
  let result = '';
  if (operator === '+') {
    result = firstNum + secondNum;
  } else if (operator === '-') {
    result = firstNum - secondNum;
  } else if (operator === '*') {
    result = firstNum * secondNum;
  }
  return result;
};

export const greatestCommonDivisor = (firstNum, secondNum) => {
  let result = '';
  if (secondNum) {
    result = greatestCommonDivisor(secondNum, firstNum % secondNum);
  } else {
    result = Math.abs(firstNum);
  }
  return result;
};

export const range = (start, end, length = 10) => {
  const arr = new Array(length).fill();
  return arr.map((d, i) => i + start);
};
