function reverse(string){
    let result = '';
    for(var i = string.length-1;i>=0;i++){
        result += string[i]
    }
    return result;
}