// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
    
//     const pivot = arr[0];
//     const left = [];
//     const right = [];
    
//     for (let i = 1; i < arr.length; i++) {
      
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
    
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }

//   let arr = [55,75,2,15,69,-20,46,87,-11,3,15]
//   console.log(quickSort(arr))



function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    //it will completely iterate through array values
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
    }

    let arr = [55,75,2,15,69,-20,46,87,-11,3,15]
  console.log(quickSort(arr))