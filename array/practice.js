const arr =  [1,3,2,4,5,2,1]
function duplicates(arr){
  const seen = {};
  const duplicate = [];

  for(let i=0;i<arr.length;i++){
    if(seen[arr[i]]){
        duplicate.push(arr[i]);
    }else{
        seen[arr[i]]=true;
    }
  }
  return duplicate;
}

console.log(duplicates(arr));

function findunique(arr){
    const seen = {};
    const unique = [];

    for(let i = 0;i<arr.length;i++){
        if(seen[arr[i]]){
            seen[arr[i]]++;
        }else{
            seen[arr[i]]=1;
        }
    }

    for(const key in seen){
        if(seen[key]=== 1){
            unique.push(parseInt(key))
        }
    }
    return unique;
}

console.log(findunique(arr));