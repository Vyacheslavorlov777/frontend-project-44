import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function evenGame() {
  let result = 0;
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (result < 3) {
    const questionOne = getRandomInt(100);
    console.log(questionOne);
    const responsFirst = readlineSync.question('Your answer: ');
    if ((questionOne % 2 === 0) && responsFirst === 'yes') {
      console.log('Correct!');
      result += 1;
    } if ((questionOne % 2 !== 0) && responsFirst === 'no') {
      console.log('Correct!');
      result += 1;
    } if ((questionOne % 2 === 0) && responsFirst !== 'yes') {
      console.log(`'${responsFirst}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${nameUser}!`);
      break;
    } else if ((questionOne % 2 !== 0) && responsFirst !== 'no') {
      console.log(`'${responsFirst}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${nameUser}!`);
      break;
    }
  }
  if (result === 3) {
    console.log(`Congratulations, ${nameUser}!`);
  }
}
