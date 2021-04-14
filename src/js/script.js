/* eslint-disable no-undef */

const script = require('./function');

let productsList = [
  { id: 1, name: 'Торт', count: 400, priceForOne: 50, priceTotal: 0 },
  { id: 2, name: 'Молоко', count: 100, priceForOne: 20, priceTotal: 0 },
  { id: 3, name: 'Сок', count: 200, priceForOne: 5, priceTotal: 0 },
];
//let listLength = productsList.length;

function createObservableArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = new Proxy(array[i], {
      set(target, property, value) {
        target[property] = value;
        callback();
        return true;
      },
    });
  }
  return new Proxy(array, {
    set(target, property, value) {
      target[property] = value;
      callback();
      return true;
    }
  });
}

function updateUI() {
  //script.calculationTotalPrice(productsList);
  let totalCost = script.totalCostCalculation(productsList);
  const source = document.getElementById('store-template').innerHTML;
  const template = Handlebars.compile(source);
  const html = template({ productsList, totalCost });
  document.getElementById('result-table').innerHTML = html;
  const arrayOfInputCount = document.getElementsByClassName('table-column__input-count');
  const arrayOfInputPrice = document.getElementsByClassName('table-column__input-price');
  document.querySelectorAll('.input').forEach((element) => {
    element.addEventListener('dblclick', (event) => {
      event.target.readOnly = false;
    });
  });
  for (let i = 0; i < arrayOfInputCount.length; i += 1) {
    arrayOfInputCount[i].addEventListener('keydown', (e) => {
      const { key } = e;
      if (key === 'Enter') {
        script.setCount(productsList[i], arrayOfInputCount[i].value);
        return true;
      }
      return false;
    });
  }

  for (let i = 0; i < arrayOfInputPrice.length; i += 1) {
    arrayOfInputPrice[i].addEventListener('keydown', (e) => {
      const { key } = e;
      if (key === 'Enter') {
        script.setPrice(productsList[i], arrayOfInputPrice[i].value);
        return true;
      }
      return false;
    });
  }
}

window.onload = function upload() {
  for (let i = 0; i < productsList.length; i++) {
    script.calculationTotalPrice(productsList[i]);
  }
  productsList = createObservableArray(productsList, updateUI);
  console.log(productsList);
  updateUI();
};