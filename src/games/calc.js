import Game from '../index.js';
import getRandom from '../randomNumber.js';

const mission = 'What is the result of the expression?';

const arrSigns = () => {
  const arrSign = ['+', '-', '*'];
  const randomSign = getRandom(0, arrSign.length - 1);
  return arrSign[randomSign];
};
const translet = (sign, numb1, numb2) => {
  switch (sign) {
    case '+':
      return numb1 + numb2;
    case '-':
      return numb1 - numb2;
    case '*':
      return numb1 * numb2;
    default:
      return 'Error';
  }
};

const arrRound = () => {
  const randomNum1 = getRandom(0, 100);
  const randomNum2 = getRandom(0, 100);
  const randomOperator = arrSigns();
  const missionRound = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const answerRound = String(translet(randomOperator, randomNum1, randomNum2));
  return [missionRound, answerRound];
};

export default function calcGame() {
  Game(arrRound, mission);
}
