module.exports = function getZerosCount(number, base) {
  trailingNulls = 10000000000; // initial amount of trailing zeros for comparison purposes
  for (let i = 2; i <= base; i ++ ) {
    // select all prime factors of the base that are prime numbers too
    if (base % i === 0 && isPrime(i)) {
      let entriesInBase = 0; // counter of entries of the prime factor in base
      let baseReminder = base;
      // find out number of entries in base for current prime factor 
      while (baseReminder % i === 0) {
        entriesInBase++;
        baseReminder /= i;
      }
      let entriesInNumber = 0; // counter of entries of the prime factor in the number
      let numberReminder = number;
      // find out number of entries in the number for current prime factor
      while (numberReminder / i > 0) {
        entriesInNumber += Math.floor(numberReminder / i);
        numberReminder = Math.floor(numberReminder / i);
      }
      // find out the prime factor with minimal entries in the number
      trailingNulls = Math.min(trailingNulls, Math.floor(entriesInNumber / entriesInBase));
    }
    // check if the prime factor is prime number
    function isPrime(num) {
      for(let i = 2, s = Math.sqrt(num); i <= s; i++)
          if(num % i === 0) return false; 
      return num > 1;
  }
  }
  return trailingNulls;
}
