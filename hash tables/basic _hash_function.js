function hash (key,arrlength){
    let total = 0;
    for(let char of key){
        let value = char.charCodeAt(0)-96;
        total = (total+value)%arrlength;
    }
    return total;
}

console.log(hash("pink",10));
console.log(hash("pink",10));
console.log(hash("pink",10));

function hash2(key,arrlen){
    let total = 0;
    let prime = 31;
    for(let i=0;i<Math.min(key.length,100);i++){
        char = key[i];
        let value = char.charCodeAt(0)-96
        total = (total *total+value)%arrlen.length;
    }
    return total;
}