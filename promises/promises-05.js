import { rand } from '../utils/index.js'

const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(rand(10))
    }, 1000);
  });
}

const getElementFromArray = (index) => {
  const testArray = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(testArray[index])
    }, 1000);
  });
}

getRandomNumber().then(number => {
  console.log(`Random number: ${number}`);
  return getElementFromArray(number);
}).then(element => {
  console.log(`Array element: ${element}`);
});
