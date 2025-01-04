const mySlice = (arr, start = 0, end = arr.length - 1) => {
  const res = [];
  if (start < 0) start = arr.length - Math.abs(start);
  while (start <= end) {
    res.push(arr[start]);
    start++;
  }
  return res;
};

const myIndexOf = (arr, item, from = 0) => {
  if (from < 0) from = arr.length - Math.abs(from);
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
};

const myIncludes = (arr, item, from = 0) => {
  if (from >= arr.length) return false;
  if (from < 0) from = arr.length - Math.abs(from);
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return true;
  }
  return false;
};
