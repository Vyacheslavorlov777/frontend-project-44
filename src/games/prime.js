import launchGame from '../index.js';
import getRandom from '../utilits.js';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const arrRound = () => {
  const missionRound = getRandom(1, 100);
  const answerRound = isPrime(missionRound) ? 'yes' : 'no';
  return [missionRound, answerRound];
};

export default function primeGame() {
  launchGame(arrRound, mission);
}
