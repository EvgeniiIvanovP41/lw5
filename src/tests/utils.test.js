/* eslint-disable no-undef */
const utils = require('../js/utils');

test('Test callback when the product changes', () => {
  const mock = jest.fn();
  let productsList = [
    { id: 1, name: 'Торт', count: 400, priceForOne: 50, priceTotal: 0 },
    { id: 2, name: 'Молоко', count: 100, priceForOne: 20, priceTotal: 0 },
    { id: 3, name: 'Сок', count: 200, priceForOne: 5, priceTotal: 0 },
  ];

  productsList = utils.createObservableArray(productsList, mock);
  productsList[0].count = 100;
  expect(mock).toHaveBeenCalled();
});

test('Test when product value changes', () => {
  let productsList = [
    { id: 1, name: 'Торт', count: 400, priceForOne: 50, priceTotal: 0 },
    { id: 2, name: 'Молоко', count: 100, priceForOne: 20, priceTotal: 0 },
    { id: 3, name: 'Сок', count: 200, priceForOne: 5, priceTotal: 0 },
  ];
  productsList = utils.createObservableArray(productsList, () => { });

  expect(productsList[0].count).toBe(400);
  productsList[0].count = 100;
  expect(productsList[0].count).toBe(100)
});