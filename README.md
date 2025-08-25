const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

function binary(arr, short) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let num = Math.floor((l + r) / 2);
    if (arr[num] === short) {
      return num;
    }
    if (arr[num] < short) {
      l = num + 1;
    } else {
      r = num - 1;
    }
  }
  return -1;
}
console.log(binary(array, 7));
