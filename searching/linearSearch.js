function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1
}

var arr = [10,20,30,40,50,60,70,80]
var target = 50;
var index = linearSearch(arr,target)
if(index=== -1){
    console.log("Element is not found");
}else{
    console.log("Element found at"+index);
}