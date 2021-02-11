/* eslint-disable no-undef */
const script = require('../js/function');

const productsList = [
  { id: 1, name: 'Торт', count: 400, priceForOne: 50, priceTotal: 0 },
  { id: 2, name: 'Молоко', count: 100, priceForOne: 20, priceTotal: 0 },
  { id: 3, name: 'Сок', count: 200, priceForOne: 5, priceTotal: 0 },
];

test('Chek setCount', () => {
  script.setCount(productsList[1], 14);
  expect(productsList[1].count).toEqual(14);
  expect(productsList[1].count).not.toEqual('20');
  expect(productsList[1].count).not.toEqual();
  expect(productsList[1].count).not.toEqual([]);
  expect(productsList[1].count).not.toEqual({});
  expect(productsList[1].count).not.toEqual('');
  expect(productsList[1].count).not.toEqual(null);

  script.setCount(productsList[1], null);
  expect(productsList[1].count).toEqual(null);
  expect(productsList[1].count).not.toEqual(14);

  script.setCount(productsList[1], {});
  expect(productsList[1].count).toEqual({});
  expect(productsList[1].count).not.toEqual(14);

  script.setCount(productsList[1], '14');
  expect(productsList[1].count).toEqual('14');
  expect(productsList[1].count).not.toEqual(14);

  script.setCount(productsList[1], 100);
});
test('Chek setCount', () => {
  script.setPrice(productsList[1], 14);
  expect(productsList[1].priceForOne).toEqual(14);
  expect(productsList[1].priceForOne).not.toEqual('20');
  expect(productsList[1].priceForOne).not.toEqual();
  expect(productsList[1].priceForOne).not.toEqual([]);
  expect(productsList[1].priceForOne).not.toEqual({});
  expect(productsList[1].priceForOne).not.toEqual('');
  expect(productsList[1].priceForOne).not.toEqual(null);

  script.setPrice(productsList[1], null);
  expect(productsList[1].priceForOne).toEqual(null);
  expect(productsList[1].priceForOne).not.toEqual(14);

  script.setPrice(productsList[1], {});
  expect(productsList[1].priceForOne).toEqual({});
  expect(productsList[1].priceForOne).not.toEqual(14);

  script.setPrice(productsList[1], '14');
  expect(productsList[1].priceForOne).toEqual('14');
  expect(productsList[1].priceForOne).not.toEqual(14);

  script.setPrice(productsList[1], 20);
});

test('Chek calculationTotalPrice', () => {
  script.calculationTotalPrice(productsList);
  expect(productsList[1].priceTotal).toEqual(2000);
  expect(productsList[1].priceTotal).not.toEqual('20');
  expect(productsList[1].priceTotal).not.toEqual();
  expect(productsList[1].priceTotal).not.toEqual([]);
  expect(productsList[1].priceTotal).not.toEqual({});
  expect(productsList[1].priceTotal).not.toEqual('');
  expect(productsList[1].priceTotal).not.toEqual(null);

  expect(script.calculationTotalPrice([])).toEqual(false);
  expect(script.calculationTotalPrice({})).toEqual(false);
});

test('Chek totalCostCalculation', () => {
  totalPrice = script.totalCostCalculation(productsList);
  expect(totalPrice).toEqual(23000);
  expect(totalPrice).not.toEqual('20');
  expect(totalPrice).not.toEqual();
  expect(totalPrice).not.toEqual([]);
  expect(totalPrice).not.toEqual({});
  expect(totalPrice).not.toEqual('');
  expect(totalPrice).not.toEqual(null);

  totalPrice = script.totalCostCalculation([]);
  expect(totalPrice).toEqual(false);
  expect(totalPrice).toEqual(false);

});