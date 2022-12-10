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

const getRandomElementFromArray = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      getRandomNumber().then(index => getElementFromArray(index))
        .then(element => resolve(element));
    }, 1000);
  });
}

getRandomElementFromArray().then(element => {
  console.log(`Random element from array: ${element}`);
});
