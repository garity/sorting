var bubbleSort = function(array) {
  var greater;
  var less;
  if (array.length <= 1) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        lesser = array[j];
        greater = array[i];
        array[i] = lesser;
        array[j] = greater;
      }
    }
  }
  return array;
}