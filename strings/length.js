// function length(string){
//     let count = 0;
//     while(string[count]!=undefined){
//         count ++;
//     }
//     return count;
// }

// let string = "javascript"
// let value = length(string)
// console.log(value);

// function palindrome(str){
//     let result='';
//     for(let i=0;i<str.length;i++){
//         for(let j=str.length-1;j>=0;j--){
//             if(str[i]===str[j]){
//                  result = str[i];
//             }
            
//         }
//     }
//     if(str===result){
//         console.log("palindrome");
//     }else{
//         console.log("not palindrome");
//     }
// }

// let variable = 'amma';
// palindrome(variable)


// function reverse(value){
//     var data = ''
//     for(var i = value.length-1 ; i>=0;i--){
//                 data += value[i];
                
//     }
//     return data;
// }

// let names = "vyshnav"
// let index = reverse(names)
// console.log(index);

function checkPalindrom(str){
    const len = str.length;
    for(let i= 0; i<len/2; i++){
        if(str[i]!= str[len-1-i]){
            return "its not a palindrome"
        }
    }
    return 'its a palindrome';
}

let value = "amma"
console.log(checkPalindrom(value));