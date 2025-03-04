let str = '228822';
let half = str.length / 2;
let sum1 = 0, sum2 = 0;

for (let i = 0; i < half; i++) {
  sum1 += +str[i];
  sum2 += +str[i + half];
}

if (sum1 === sum2) {
  console.log('да');
} else {
  console.log('нет');
}
