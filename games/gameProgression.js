import { gameParts, randomInteger, range } from '../index.js';
import welcome from '../src/cli.js';

const brainArithmeticProgression = () => {
  const correctAnswerList = [];
  console.log('What number is missing in the progression?');
  const name = welcome();
  for (let i = 0; i < 3; i += 1) {
    const firstNum = randomInteger(1, 100);
    const secondNum = randomInteger(1, 100);
    const emptyValue = randomInteger(0, 10);
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      const newProgression = range(firstNum, secondNum);
      const question = newProgression.map((item, id) => (id === emptyValue ? '..' : item)).join(', ');
      const correctAnswer = newProgression[emptyValue].toString();
      const result = gameParts(name, question, correctAnswer);
      correctAnswerList.push(result);
    }
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainArithmeticProgression;
