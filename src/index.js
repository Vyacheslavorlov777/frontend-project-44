import readlineSync from 'readline-sync';

export const repit = 3;

export default function gameBrainLogic(rounds, mission) {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log(`${mission}`);
  for (let i = 0; i < repit; i += 1) {
    const [assignment, correctAnswer] = rounds[i];
    console.log(`Question: ${assignment}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
}
