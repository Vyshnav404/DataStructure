function mergeSort(arr){
    if(arr.length <=1){
        return arr;
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);
    
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const resultArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            resultArr.push(leftArr.shift())
        }else{
            resultArr.push(rightArr.shift())
        }
    }

    return resultArr.concat(leftArr,rightArr)
}

function removeDuplicate(arr){
    const sortedArr = mergeSort(arr)
    const result = []

    for(let i=0;i<sortedArr.length;i++){
        if()
    }
}

let unordered = [12,63,2,85,6,4,6]
console.log(mergeSort(unordered))

