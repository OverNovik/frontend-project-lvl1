import { gameParts, randomInteger } from '../index.js';
import welcome from '../src/cli.js';

const brainEven = () => {
  const correctAnswerList = [];
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = welcome();
  for (let i = 0; i < 3; i += 1) {
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      const question = randomInteger(1, 1000);
      const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
      const result = gameParts(name, question, correctAnswer);
      correctAnswerList.push(result);
    }
    if (correctAnswerList[correctAnswerList.length - 1] !== 'finish') {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainEven;
