/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(/* arr */) {
  throw new Error('Not implemented');
  // const newArr = [];
  // const sortArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === -1) {
  //     newArr.push(i);
  //   }
  // }
  // for (let j = 0; j < newArr; j++) {
  //   sortArr.splice(newArr[j], 0, -1);
  // }
  // return sortArr;
}

module.exports = sortByHeight;
