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
