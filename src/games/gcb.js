import gameBrainLogic, { repit } from '../index.js';
import getRandom from '../randomNumber.js';

const mission = 'Find the greatest common divisor of given numbers.';

function largestDivisor(a, b) {
  if (a === 0) {
    return b;
  }
  return largestDivisor(b % a, a);
}
const arrRound = () => {
  const number1 = getRandom(0, 100);
  const number2 = getRandom(0, 100);
  const missionRound = `${number1} ${number2}`;
  const answerRound = String(largestDivisor(number1, number2));
  return [missionRound, answerRound];
};

export default function gcbGaming() {
  const rounds = [];
  for (let i = 0; i < repit; i += 1) {
    rounds[i] = arrRound();
  }
  return gameBrainLogic(rounds, mission);
}
