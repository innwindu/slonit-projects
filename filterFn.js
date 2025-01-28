const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myFilter = (arr, callback) => {
  const res = [];
  for (el of arr) {
    if (callback(el)) {
      res.push(el);
    }
  }
  return res;
};

const evenNumbers = myFilter(numbers, function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

const greaterThanThree = myFilter(numbers, function (num) {
  return num > 3;
});
console.log(greaterThanThree);
