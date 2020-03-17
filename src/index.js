
exports.min = function min(array) {
  if (array === undefined || array.length === 0) return 0;

  return array.reduce((min, elem) => (min < elem) ? min : elem)
}

exports.max = function max(array) {
  if (array === undefined || array.length === 0) return 0;

  return array.reduce((max, elem) => (max > elem) ? max : elem)
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) return 0;

  return array.reduce((sum, elem) => sum += elem) / array.length;
}
