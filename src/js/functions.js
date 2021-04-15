/* eslint-disable no-undef */

module.exports.totalCostCalculation = function totalCostCalculation(list) {
  if (isList(list) && list.length > 0) {
    list = list.map((item) => item.priceTotal).reduce((accumulator, currentValue) => accumulator + currentValue);
    return list;
  }
  return false;
};

module.exports.calculationTotalPrice = function calculationTotalPrice(list) {
  for (let i = 0; i < list.length; i++) {
    const result = list[i].priceForOne * list[i].count;
    if (!Number.isNaN(result)) {
      list[i].priceTotal = result;
      //return true;
    }
    //return false;
  }
};


isList = function isList(list) {
  if (Array.isArray(list) && list.length > 0) {
    return true;
  }
  return false;
};

module.exports.setCount = function setCount(elementProduct, count) {
  elementProduct.count = count;
  return true;
};
module.exports.setPrice = function setPrice(elementProduct, price) {
  elementProduct.priceForOne = price;
  return true;
};