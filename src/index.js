module.exports = function getZerosCount(number, base) {
  let convNum = number;
  let changeBase = base;

  for (let currentBase = 2; currentBase <= base; currentBase += 1) {
    if (changeBase % currentBase === 0) {
      let countBase = 0;
      let count = 0;
      let buffNum = number;

      do {
        count += Math.floor(buffNum / currentBase);
        buffNum = Math.floor(buffNum / currentBase);
      } while ((buffNum / currentBase) > 0);

      do {
        countBase += 1;
        changeBase /= currentBase;
      } while (changeBase % currentBase === 0);


      convNum = Math.min((count / countBase), convNum);
    }
  }
  return Math.floor(convNum);
};
