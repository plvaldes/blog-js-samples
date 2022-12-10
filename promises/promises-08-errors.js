import { rand } from '../utils/index.js'

const getRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(rand(10))
    }, 1000);
  });
}

const getElementFromArray = (index) => {
  const testArray = [];
  return new Promise((resolve, reject) => {
    if (index > testArray.length) {
      reject(`Index ${index} out of bounds`);
      // throw `Index ${index} out of bounds`;
    }
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
}).catch(err => console.error(`Error! ${err}`));
