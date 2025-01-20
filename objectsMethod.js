const obj = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };

const objectFieldsSum = (obj) => {
  let res = 0;
  for (key in obj) {
    if (typeof obj[key] === 'number') res += obj[key];
  }
  return res;
};

console.log(objectFieldsSum(obj));

const objectFieldsArr = (obj) => {
  const res = [];
  const arr = [];
  for (key in obj) {
    if (typeof obj[key] === 'number') arr.push(obj[key]);
  }
  arr.sort((a, b) => b - a);
  console.log(arr);
  for (elem of arr) {
    for (key in obj) {
      if (elem === obj[key]) res.push(key);
    }
  }
  return res;
};

console.log(objectFieldsArr(obj));
