// class Node{
//     constructor(value){
//         this.value= value;
//         this.next = null;
//     }
// }

// class Queue{
//     constructor(value){
//         const newNode = new Node(value)
//         this.first = newNode;
//         this.last = newNode;
//         this.length=1;
//     }

//     enqueue(value){
//         const newNode = new Node(value)
//         if(this.length===0){
//             this.first = newNode
//             this.last = newNode
//         }else{
//             this.last.next = newNode
//             this.last = newNode
//         }
//         this.length++
//         return this
//     }

//  dequeue(){
//     if(this.length===0)return undefined;
//     let temp= this.first
    
//      if(this.length===1){
//         this.first = null;
//         this.last = null
//      }else{
//         this.first = this.first.next;
//         temp.next = null
//      }
//      this.length--;
//      return temp
//  }

//     show(){
//         if(this.length===0){
//             console.log("there is no element ");
//         }else{
//             let current = this.first
//             while(current){
//                 console.log(current.value);
//                 current= current.next
//             }
//         }
//         return this
//     }
// }

// let myQueue = new Queue(10)
// myQueue.enqueue(11)
// myQueue.enqueue(30)
// myQueue.dequeue()
// myQueue.show()