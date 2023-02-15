function toUpperCase(str){
    let newString = '';
    for(let i = 0;i<str.length;i++){
        let charCode = str.charCodeAt(i);
        if(charCode>=97 && charCode <=122){
            charCode -= 32;
        }
        newString += String.fromCharCode(charCode)
    }
    return newString;
}

let string = "dubai";
let value = toUpperCase(string)
console.log(value);