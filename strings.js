const str =
  'lorem ipsum, dolor sit amet,consecteturab adipisicing elit. Veritatis recusandae laborum doloribus vel perferendis quasi, a architecto optio praesentium nemo natus earum magni quisquam labore culpa quaerat perspiciatis! Culpa, ex.';

const firstLetterToUpCase = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};

console.log(firstLetterToUpCase(str));

const cutString = (str) => {
  if (str.length < 40) {
    return str;
  } else if (str.length > 40) {
    str = str.slice(0, 40);
  }
  if (/[(,.!?:;)/\s]/.test(str.slice(-1))) {
    return str.slice(0, 39) + '...';
  } else if (/\w/.test(str.slice(-1))) {
    for (i = 40; i >= 0; i--) {
      if (/[(,.!?:;)/\s]/.test(str[i])) {
        return str.slice(0, i) + '...';
      }
    }
  }
};

console.log(cutString(str));

const subString1 = 'dolor sit';
const subString2 = 'lorem ipsum, dolor sit amet';

const subStrings = (str1, str2) => {
  return str1.includes(str2) || str2.includes(str1);
};

console.log(subStrings(subString1, subString2));
