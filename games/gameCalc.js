import { gameParts, randomInteger, mathOperation } from '../index.js';
import welcome from '../src/cli.js';

const brainCalc = () => {
  const correctAnswerList = [];
  const operators = ['+', '-', '*'];
  console.log('What is the result of the expression?');
  const name = welcome();
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomInteger(1, 100);
    const secondNum = randomInteger(1, 100);
    const randomOperator = operators[randomInteger(0, 2)];
    if (correctAnswerList[i - 1] !== 'finish') {
      const question = `${firstNum}${randomOperator}${secondNum}`;
      const correctAnswer = mathOperation(firstNum, secondNum, randomOperator).toString();
      const result = gameParts(name, question, correctAnswer);
      correctAnswerList.push(result);
    }
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainCalc;
