import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function calcGame() {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('What is the result of the expression?');
  const variableA = getRandomInt(100);
  const variableB = getRandomInt(100);
  const variableC = getRandomInt(100);
  const variableD = getRandomInt(100);
  const variableE = getRandomInt(100);
  const variableF = getRandomInt(100);
  const getSum = `${variableA} + ${variableB}`;
  const resultSum = variableA + variableB;
  const getDifference = `${variableC} - ${variableD}`;
  const resultDifference = variableC - variableD;
  const getMultiplication = `${variableE} * ${variableF}`;
  const resultMultiplication = variableE * variableF;
  const arrCalc = [getSum, getDifference, getMultiplication];
  const arrResult = [resultSum, resultDifference, resultMultiplication];
  for (let i = 0; i < arrCalc.length; i += 1) {
    console.log(`Question: ${arrCalc[i]}`);
    const respons = readlineSync.question('Your answer: ');
    if (Number(respons) === arrResult[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${respons}' is wrong answer ;(. Correct answer was '${arrResult[i]}'.
                Let's try again, ${nameUser}!`);
      break;
    }
    console.log(`Congratulations, ${nameUser}!`);
  }
}