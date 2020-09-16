const isEmptyArr = (arr) => {
    for (const el of arr) {
        return false;
    }
    return true;
}

const isValidateArr = (arr) => Array.isArray(arr) && !isEmptyArr(arr);

exports.min = function min(array) {
    if (!isValidateArr(array)) return 0;
    return Math.min(...array);
}

exports.max = function max(array) {
    if (!isValidateArr(array)) return 0;
    return Math.max(...array);
}

exports.avg = function avg(array) {
    if (!isValidateArr(array)) return 0;
    const len = array.length;
    const sumArr = array.reduce((sum, num) => sum + num, 0);
    return sumArr / len;
}
