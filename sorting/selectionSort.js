function selectionSort(arr){
    for(var i= 0;i<arr.length;i++){
      var min=i;
      for(var j = i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
      }
      if(i!==min){
        var temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
      }
    }
    return arr
}

// let num = [1,8,45,3,5,76,11]
// console.log(num);
// selectionSort(num)
// console.log('after sorted');
// console.log(num);