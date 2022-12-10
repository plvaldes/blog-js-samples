const promise1 = () => {
  return new Promise((resolve, reject) => {
    resolve(1)
  });
}

const promise2 = () => {
  return new Promise((resolve, reject) => {
    resolve(2)
  });
}

const promise3 = () => {
  return new Promise((resolve, reject) => {
    resolve(3)
  });
}

const promiseRejected = () => {
  return new Promise((resolve, reject) => {
    reject('some error')
  });
}


promise1().then(value => {
  console.log(`First value: ${value}`);
  return promise2();
}).then(value => {
  console.log(`Second value: ${value}`);
  return promise3();
}).then(value => {
  console.log(`Third value: ${value}`);
  return promiseRejected();
}).catch((err) => {
  console.log(`Error is: ${err}`);
  return Promise.resolve(50);
}).then(value => {
  console.log(`Last value: ${value}`);
})
