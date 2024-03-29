import launchGame from '../index.js';
import getRandom from '../utilits.js';

const isEven = (number) => number % 2 === 0;
const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const arrRound = () => {
  const missionRound = getRandom(1, 100);
  const answerRound = isEven(missionRound) ? 'yes' : 'no';
  return [missionRound, answerRound];
};

export default function evenGame() {
  launchGame(arrRound, mission);
}
