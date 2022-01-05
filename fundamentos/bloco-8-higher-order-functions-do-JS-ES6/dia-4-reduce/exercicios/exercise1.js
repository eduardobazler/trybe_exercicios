const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(acc, current) {
  acc.push(...current);
  return acc;
}

const arrayFanily = arrays.reduce(flatten, [])
console.log(arrayFanily);