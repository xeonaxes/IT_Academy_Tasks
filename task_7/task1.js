function rollDice(numPlayers, numRolls) {
    let players = [];
  
    for (let i = 0; i < numPlayers; i++) {
      let sum = 0;
      for (let j = 0; j < numRolls; j++) {
        let resultThrow = Math.floor(Math.random() * 6) + 1;
        sum += resultThrow;
      }
      players.push({ player: i + 1, sum });
      console.log(`Player ${i + 1} scored ${sum}`);
    }
  
    let maxSum = Math.max(...players.map(p => p.sum));
    let winners = players.filter(p => p.sum === maxSum);
  
    if (winners.length > 1) {
      console.log('Draw!');
    } else {
      console.log(`The player won: ${winners[0].player}`);
    }
  }
  
  rollDice(4, 5); 
  
  