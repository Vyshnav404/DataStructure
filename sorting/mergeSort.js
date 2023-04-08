function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
  
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
  
  function merge(leftArray, rightArray) {
    const resultArray = [];
  
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] <= rightArray[0]) {
        resultArray.push(leftArray.shift());
        
      } else {
        resultArray.push(rightArray.shift());
    
    }
}
return resultArray.concat(leftArray, rightArray);
  
      
  }


  const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8]





// iteration approach

// function mergeSort(arr) {
//   const n = arr.length;
//   for (let size = 1; size < n; size *= 2) {
//     for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
//       const mid = leftStart + size - 1;
//       const rightEnd = Math.min(leftStart + 2*size - 1, n-1);
//       merge(arr, leftStart, mid, rightEnd);
//     }
//   }
//   return arr;
// }

// function merge(arr, leftStart, mid, rightEnd) {
//   const temp = [];
//   let left = leftStart;
//   let right = mid + 1;
//   while (left <= mid && right <= rightEnd) {
//     if (arr[left] < arr[right]) {
//       temp.push(arr[left++]);
//     } else {
//       temp.push(arr[right++]);
//     }
//   }
//   while (left <= mid) {
//     temp.push(arr[left++]);
//   }
//   while (right <= rightEnd) {
//     temp.push(arr[right++]);
//   }
//   for (let i = leftStart; i <= rightEnd; i++) {
//     arr[i] = temp[i - leftStart];
//   }
// }
