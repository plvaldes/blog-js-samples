import { rand } from '../utils/index.js'

// This code is WRONG. Only useful for demo purposes.
// Don't do this in any project!!
const getRandomNumber = () => {
  setTimeout(()=> {
    return rand(10)
  }, 1000);
}

console.log(`Random number: ${getRandomNumber()}`);
