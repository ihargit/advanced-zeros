module.exports = function getZerosCount(number, base) {
  trailingNulls = 10000000000; // initial amount of trailing zeros for comparison purposes
  for (let i = 2; i <= base; i ++ ) {
    if (base % i === 0) {
      let numberOfEntries = 0;
      let baseReminder = base;
      while (baseReminder % i === 0) {
        numberOfEntries++;
        baseReminder /= i;
      }
      
    }
  }
}