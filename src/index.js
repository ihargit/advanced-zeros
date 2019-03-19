module.exports = function getZerosCount(number, base) {
  trailingNulls = 10000000000; // initial amount of trailing zeros for comparison purposes
  for (let i = 2; i <= base; i ++ ) {
    if (base % i === 0) {
      let entriesInBase = 0;
      let baseReminder = base;
      while (baseReminder % i === 0) {
        entriesInBase++;
        baseReminder /= i;
      }
      let numberReminder = number;
      let entriesInNumber = 0;
      while (numberReminder / i > 0) {
        entriesInNumber++;
        numberReminder /= i;
      }
      trailingNulls = Math.min(trailingNulls, entriesInNumber / entriesInBase);
    }
  }
  return trailingNulls;
}