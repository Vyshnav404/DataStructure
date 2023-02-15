//     //    >======= creating constructor and also push and pop=======<

// class Node {
//     constructor(value){
//         this.value= value
//         this.next = null
//     }
// }  

// class stack{
//     constructor(value){
//         const newNode = new Node(value)
//         this.top = newNode
//         this.length= 1;
//     }

//    push(value){
//     const newNode = new Node(value)
//     if(this.length===0){
//         this.top=newNode
//     }else{
//         newNode.next=this.top
//         this.top = newNode
//     }
//     this.length++
//     return this
//    } 

// pop(){
//     if(this.length===0)return undefined;
//     let temp = this.top;
//     this.top= this.top.next;
//     temp.next = null;
//     this.length--;
//     return temp
// }


// }
// var arr = [1,2,3,4]

// let myStack = new stack('a')
// for(let i=0;i<arr.length;i++){
//     myStack.push(arr[i])
// }
// // myStack.push(44)
// // myStack.push(55)
// // myStack.push(66)
// // myStack.pop()
// console.log(myStack);
