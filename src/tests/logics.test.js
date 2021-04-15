/* eslint-disable no-undef */
const functions = require('../js/function');

const productsList = [
  { id: 1, name: 'Торт', count: 400, priceForOne: 50, priceTotal: 0 },
  { id: 2, name: 'Молоко', count: 100, priceForOne: 20, priceTotal: 0 },
  { id: 3, name: 'Сок', count: 200, priceForOne: 5, priceTotal: 0 },
];

test('Check setCount', () => {
  functions.setCount(productsList[1], 14);
  expect(productsList[1].count).toEqual(14);

  functions.setCount(productsList[1], null);
  expect(productsList[1].count).toEqual(null);
  expect(productsList[1].count).not.toEqual(14);

  functions.setCount(productsList[1], {});
  expect(productsList[1].count).toEqual({});
  expect(productsList[1].count).not.toEqual(14);

  functions.setCount(productsList[1], '14');
  expect(productsList[1].count).toEqual('14');
  expect(productsList[1].count).not.toEqual(14);

  functions.setCount(productsList[1], 100);
});
test('Check setPrice', () => {
  functions.setPrice(productsList[1], 14);
  expect(productsList[1].priceForOne).toEqual(14);


  functions.setPrice(productsList[1], null);
  expect(productsList[1].priceForOne).toEqual(null);
  expect(productsList[1].priceForOne).not.toEqual(14);

  functions.setPrice(productsList[1], {});
  expect(productsList[1].priceForOne).toEqual({});
  expect(productsList[1].priceForOne).not.toEqual(14);

  functions.setPrice(productsList[1], '14');
  expect(productsList[1].priceForOne).toEqual('14');
  expect(productsList[1].priceForOne).not.toEqual(14);

  functions.setPrice(productsList[1], 20);
});

test('Check calculationTotalPrice', () => {
  functions.calculationTotalPrice(productsList);
  expect(productsList[1].priceTotal).toEqual(2000);

  expect(functions.calculationTotalPrice([])).toEqual(false);
  expect(functions.calculationTotalPrice({})).toEqual(false);
});

test('Check totalCostCalculation', () => {
  totalPrice = functions.totalCostCalculation(productsList);
  expect(totalPrice).toEqual(23000);

  totalPrice = functions.totalCostCalculation([]);
  expect(totalPrice).toEqual(false);
  expect(totalPrice).toEqual(false);

});