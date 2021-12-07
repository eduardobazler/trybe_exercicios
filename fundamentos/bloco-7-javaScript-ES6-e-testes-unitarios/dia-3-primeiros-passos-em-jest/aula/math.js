function sum(value1, value2) {
  return value1 + value2;
}

function summationOf(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i;
  }
  return result;
}

module.exports = {
  sum: sum,
  summationOf: summationOf,

};