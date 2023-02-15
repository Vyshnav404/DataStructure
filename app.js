class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length-1;
        let element = this.values[index];

        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex]

            if(parent >= element) break;
            this.values[parentIndex]=element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }


    extract(){
        let max = this.values[0];
        let end = this.values.pop();
        this.values[0]= end;
        this.sinkdown();
        return max;
    }

    sinkdown(){
        let index = 0;
        let length = this.values.length;
        let element = this.values[0];
        while(true){
            let leftChildIdx = 2*index+1;
            let rightChildIdx = 2*index+2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChild
                }
            }

            if(rightChild < length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap == null && rightChild > element)||
                    (swap!==null && rightChild >leftChild)
                ){
                    swap = rightChild;
                }
            }

            if(swap === null) break;
            this.values[index] = this.values[swap]
            this.values[swap] = element;
            swap  = index;
        }
    }

    buildHeap(arr){
        let n = arr.length;
        for(let i= Math.floor(n/2);i>=0;i--){
            this.heapify(arr,i,n)
        }
    }

    heapify(arr,i,n){
        let largest = i;
        let left = 2*i+1;
        let right = 2*i+2;

        if(left < n && arr[left] > arr[largest]){
            largest = left;
        }

        if(right < n && arr[right]> arr[largest]){
            largest = right;
        }

        if(largest !==i){
            [arr[i],arr[largest]] = [arr[largest],arr[i]]
            this.heapify(arr,largest,n)
        }
    }
}

let array = [ 67,8,100,7,89,9]
let heap = new MaxBinaryHeap()
heap.insert(66)
heap.insert(23)
heap.insert(4)
heap.insert(53)
heap.insert(22)
heap.buildHeap(array)
console.log(heap);
console.log(array);