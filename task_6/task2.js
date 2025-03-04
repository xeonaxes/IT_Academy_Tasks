let n = 1000;
let limit = 50;
let num = 0;

while (n >= limit) {
  n = n / 2;
  num++;
}

console.log(`Result: ${n}`);
console.log(`Number of iterations: ${num}`);
