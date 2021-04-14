/* eslint-disable no-undef */

const reducer = (accumulator, currentValue) => accumulator + currentValue;
module.exports.totalCostCalculation = function totalCostCalculation(list) {
  if (isList(list) && list.length > 0) {
    list = list.map((item) => item.priceTotal).reduce(reducer);
    return list;
  }
  return false;
};

module.exports.calculationTotalPrice = function calculationTotalPrice(list) {
  const result = list.priceForOne * list.count;
  if (!Number.isNaN(result)) {
    list.totalPrice = result;
    return true;
  }
  return false;
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