function calculateSpookyFridays(startDateStr) {
    let startDate = new Date(startDateStr);
    let endDate = new Date();
    let spookyFridays = 0;
  
    for (
      let year = startDate.getFullYear();
      year <= endDate.getFullYear();
      year++
    ) {
      let monthStart = year === startDate.getFullYear() ? startDate.getMonth() : 0;
      let monthEnd = year === endDate.getFullYear() ? endDate.getMonth() : 11;
  
      for (let month = monthStart; month <= monthEnd; month++) {
        let date = new Date(year, month, 13);
        if (date.getDay() === 5) { 
            spookyFridays++;
        }
      }
    }
  
    console.log(`Since ${startDateStr} until today ${spookyFridays} friday the 13th.`);
  }
  
  calculateSpookyFridays('2001-02-03');
  