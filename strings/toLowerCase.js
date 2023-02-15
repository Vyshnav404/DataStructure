function toLowerCase(str){
    let newString = '';
    for(let i = 0;i<str.length;i++){
        let Charcode = str.charCodeAt(i);
        if(Charcode >=65 && Charcode <= 97){
            Charcode += 32;
        }
         newString += String.fromCharCode(Charcode)
    }
    return newString;
}

let string = "VYSHNAV"
let ans = toLowerCase(string)
console.log(ans);

// function toLowerCase(string){
//     let result = '';
//     for(let i = 0 ; i<string.length; i++){
//         let charCode = string.charCodeAt(i);
//         if(charCode >=65 && charCode <=97){
//             charCode += 32;
//         }
//         result += String.fromCharCode(charCode);
//     }
//     return result;
// }
 
// let value = "HELLO WORLD"
// let ans = toLowerCase(value)
// console.log(ans);