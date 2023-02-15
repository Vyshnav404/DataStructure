function subString(string,start,end){
    let result = '';
    for(var i = start; i< end; i++){
        result += string[i];
    }
    return result;
}

console.log(subString("javascript",4,10));




