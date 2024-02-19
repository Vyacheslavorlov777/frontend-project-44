import launchGame from '../index.js';
import getRandom from '../utilits.js';

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

export default function gcdGaming() {
  launchGame(arrRound, mission);
}
