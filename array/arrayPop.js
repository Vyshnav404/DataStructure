function customPop(arr) {
    if (arr.length === 0) return undefined;
    var last = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return last;
  }