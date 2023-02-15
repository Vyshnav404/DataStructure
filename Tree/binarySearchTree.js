class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class bst{
    constructor(){
        this.root = null;
    }
 
        // insert node

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            var current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value < current.value){
                    if(current.left===null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }

    //    search node

    find(value){
        if(this.root === null) return false;
        var current = this.root;
        var found = false;
       while(current && !found){
        if(value < current.value){
            current = current.left;
        }else if(value > current.value){
            current = current.right;
        }else{
            found = true;
        }
       } 
       if(!found) return undefined;
       return current;
    }

    // delete node 

    delete(value) {
        this.root = this.deleteNode(this.root, value);
      }
    
      deleteNode(node, value) {
        if (!node) return null;
        if (value < node.value) {
          node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
          node.right = this.deleteNode(node.right, value);
        } else {
          if (!node.left && !node.right) return null;
          if (!node.right) return node.left;
          if (!node.left) return node.right;
          node.value = this.min(node.right)
          node.right = this.deleteNode(node.right,node.value)
        }
        return node;
      }
      min(node){
        if(!node.left) return node;
        return this.min(node.left);
      }


    //   validate bst or not

    //   isValidBST(node, min = null, max = null) {
    //     if (!node) return true;
    //     if (max !== null && node.value >= max) {
    //       return false;
    //     }
    //     if (min !== null && node.value <= min) {
    //       return false;
    //     }
    //     const leftSide = this.isValidBST(node.left, min, node.value);
    //     const rightSide = this.isValidBST(node.right, node.value, max);
        
    //     return leftSide && rightSide;
    //     }



    //  breadth first search

    bfs(){
        var node = this.root;
        var data = [];
        var queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data;
    }
      
    // delete(value){
    //     this.root = deleteNode(this.root,value)
    // }

    // deleteNode(node,value){
    //     if(node === null){
    //         return node;
    //     }
    //     if(value < node.value){
    //         node.left = this.deleteNode(node.left,value)
    //     }else if(value > node.value){
    //         node.right = this.deleteNode(node.right)
    //     }else{
    //         if(!node.left && !node.right){
    //             return null;
    //         }
    //         if(!node.left){
    //             return node.right;
    //         }
    //         if(!node.right){
    //             return node.left;
    //         }
    //     }
        
    // }
}
  
  
   

var tree = new bst();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.delete(13)
// const t1 = new bst()
// console.log(t1.isValidBST(tree));

console.log(tree);