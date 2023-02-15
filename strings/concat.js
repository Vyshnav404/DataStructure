function concate(a,b){
    for(let i = 0;i<b.length;i++){
        a +=b[i];
    }
    return a
}

console.log(concate("java","script"));