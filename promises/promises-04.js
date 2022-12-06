import { rand } from '../utils/index.js'

const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(rand(10))
    }, 1000);
  });
}

getRandomNumber().then(number => console.log(`Random number: ${number}`));
