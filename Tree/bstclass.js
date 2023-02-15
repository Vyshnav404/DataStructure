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
}

var tree = new bst();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);

console.log(tree);