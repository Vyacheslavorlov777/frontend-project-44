import gameBrainLogic, { repit } from '../index.js';
import getRandom from '../randomNumber.js';

const isEven = (number) => number % 2 === 0;
const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const arrRound = () => {
  const missionRound = getRandom(0, 100);
  const answerRound = isEven(missionRound) ? 'yes' : 'no';
  return [missionRound, answerRound];
};

export default function evenGame() {
  const rounds = [];
  for (let i = 0; i < repit; i += 1) {
    rounds[i] = arrRound();
  }
  return gameBrainLogic(rounds, mission);
}
