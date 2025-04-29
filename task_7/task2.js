function randomSplit(number, parts) {
    let result = [];
    let sum = 0;
  
    for (let i = 0; i < parts - 1; i++) {
      let part = Math.floor(Math.random() * (number - sum - (parts - i - 1))) + 1;
      result.push(part);
      sum += part;
    }
    result.push(number - sum);
    console.log('Integers:', result);
  }
  




  function randomSplitFractions(number, parts) {
    let result = [];
    let sum = 0;
  
    for (let i = 0; i < parts - 1; i++) {
      let part = +(Math.random() * (number - sum - (parts - i - 1) * 0.01)).toFixed(2);
      result.push(part);
      sum += part;
    }
    result.push(+(number - sum).toFixed(2));
    console.log('Fractional numbers:', result);
  }
  
  randomSplit(15, 3);
  randomSplitFractions(15, 3);
  