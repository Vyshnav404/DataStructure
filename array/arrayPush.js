// function push(arr,value){
//     arr[arr.length]= value;
//     return arr.length;
// }


// let arr = [ 1, 2, 3 ]
// push(arr,99)
// push(arr,9)
// console.log(arr);

// function findKthLargest(arr, k) {
//     if (k < 1 || k > arr.length) {
//       return null; // Invalid input
//     }
  
//     for (let i = 0; i < k; i++) {
//       let maxIndex = i;
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > arr[maxIndex]) {
//           maxIndex = j;
//         }
//       }
//       [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]; // Swap max element to front
//     }
  
//     return arr[k - 1]; // Return the kth largest element
//   }
  
//   // Example usage
//   const myArr = [3, 7, 1,7, ,8,8, 4, 5];
//   const k = 2;
//   const kthLargest = findKthLargest(myArr, k); 
//   console.log(kthLargest);

  function palindrome(value){
    let n = value.length
    for(let i=0;i<n/2;i++){
      if(value[i]!==value[n-1-i]){
        return "it is not a palindrome"
      }
    }
    return "it is a palindrome"
  }
  
  console.log(palindrome("ammu"))