function amountOfGoods(amounts) {
  let result = 0;
  amounts.forEach((i) => {
    result += i;
  });
  return result;
}

let customersPurchaseAmount = [10000, 20000, 30000];

console.log(amountOfGoods(customersPurchaseAmount));
