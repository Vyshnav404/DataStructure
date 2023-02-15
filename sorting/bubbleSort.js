// function bubbleSort(arr){
//     for(var i=arr.length; i>0; i--){
//         for(var j= 0; j< i-1; j++){
//             if(arr[j]>arr[j+1]){
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// let numbers = [43,52,12,3,94,71,25]

// bubbleSort(numbers)
// console.log(numbers);

       
                         //   optimized code of binary search

// function bubbleSort(arr){
//     for(var i = arr.length;i>0;i++){
//         var noSwap;
//         for(var j= 0;j<i-1;j++){
//             noSwap =true;
//             if(arr[j]>arr[j+1]){
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1]=temp
//                 noSwap = false;
//             }
//         }
//         if(noSwap){
//             break;
//         }
//     }
//     return arr;
// }

// let array = [43,52,12,3,94,71,25]
// console.log(array);
// bubbleSort(array)
// console.log('After sorted');
// console.log(array);