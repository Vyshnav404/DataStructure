// function replace(str, search, replacement) {
//     let result = '';
//     let i=0;
//     while(i<str.length){
//         if(str.substring(i,i+search.length)===0){
//             result +=replacement;
//             i +=search.length;
//         }else{
//             result +=str[i];
//             i++;
//         }
//     }
//     return result;
//   }


function replace(str, oldVal, newVal) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === oldVal) {
        newStr += newVal;
      } else {
        newStr += str[i];
      }
    }
    return newStr;
  }

let mysting = 'hello world'
let replaceString = replace(mysting,"world","go")
console.log(mysting);
console.log(replaceString);