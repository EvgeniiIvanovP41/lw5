/* eslint-disable no-undef */
module.exports.createObservableArray = function createObservableArray(array, callback) {
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