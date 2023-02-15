// function binarySearch(arr,target){
//     var left = 0;
//     var right = arr.length-1;
//     while(left<=right){
//         var mid = Math.floor((left+right)/2);

//         if(arr[mid]==target){
//             return mid;
//         }else if(arr[mid]<target){
//             left=mid+1;
//         }else{
//             right=mid+1;
//         }
//     }
//     return -1
// }

// var arr=[10,20,30,40,50,60,70,80]
// var target = 20;
// var index = binarySearch(arr,target)
// if(index==-1){
//     console.log('Element not found');
// }else{
//     console.log("Element at index  "+index);
// }