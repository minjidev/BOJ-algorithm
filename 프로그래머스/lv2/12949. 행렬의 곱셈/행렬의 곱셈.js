function solution(arr1, arr2) {
  var res = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = arr1[i];
    res.push([]);
    for (let j = 0; j < arr2[0].length; j++) {
      var sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += row[k] * arr2[k][j];
      }
      res[i].push(sum);
    }
  }
  return res;
}
