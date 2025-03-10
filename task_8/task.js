function createPromise(num) {
    return new Promise(resolve => {
      let delay = Math.floor(Math.random() * 300) + 100; 
      setTimeout(() => {
        resolve(num);
      }, delay);
    });
  }
  
  let promise1 = createPromise(1);
  let promise2 = createPromise(2);
  let promise3 = createPromise(3);
  
Promise.race([promise1, promise2, promise3])
    .then(result => {
      console.log(`First promise: ${result}`);
    });
  




function calculateRandomNum() {
    return new Promise(resolve => {
      setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 5) + 1;
        console.log(`Random number: ${randomNumber}`);
        resolve(randomNumber);
      }, 200);
    });
  }
  
async function calculateSquare() {
    let num = await calculateRandomNum();
    console.log(`Square number: ${num * num}`);
  }
  calculateSquare();
  
  
  


function delayedRandomNum(min, max, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`Random number (${min}-${max}): ${randomNumber}`);
        resolve(randomNumber);
      }, delay);
    });
  }
  
async function sumTwoRandoms() {
    let num1 = await delayedRandomNum(1, 5, 200);
    let num2 = await delayedRandomNum(6, 10, 300); 
  
    console.log(`Sum of numbers: ${num1 + num2}`);
  }
  
sumTwoRandoms();
  