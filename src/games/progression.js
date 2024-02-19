import launchGame from '../index.js';
import getRandom from '../utilits.js';

const mission = 'What number is missing in the progression?';

const arrRound = () => {
  const arr = [getRandom(1, 10)];
  const lengthProgression = getRandom(8, 10);
  const difference = getRandom(1, 30);
  for (let i = 0; i < lengthProgression; i += 1) {
    const itemProgression = arr[i] + difference;
    arr.push(itemProgression);
  }
  const randomItem = getRandom(0, arr.length - 1);
  const sign = '..';
  const answerRound = String(arr[randomItem]);
  arr[randomItem] = sign;
  const missionRound = arr.join();
  return [missionRound, answerRound];
};

export default function progressionGame() {
  launchGame(arrRound, mission);
}
