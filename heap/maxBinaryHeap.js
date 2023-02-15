class MaxBinaryHeap{
    constructor(){
        this.values = []
    }

    insert(element){
        this.values.push(element);
        this.bubbleUP();
    }

    bubbleUP(){
        let index = this.values.length-1;
        const element = this.values[index];

        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parentValue = this.values[parentIndex]
            if(element <= parentValue) break;
            this.values[parentIndex]= element;
            this.values[index] = parentValue
            index = parentIndex;
        }
    }

    extractMax(){
        const max = this.values[0]
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkdown();
        return max;
    }
    sinkdown(){
        let index = 0;
        let length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2*index+1;
            let rightChildIdx = 2*index+2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] =element;
            index = swap;
        }
    }

    buildHeap(arr){
        let n = arr.length;
        for(let i= Math.floor(n/2);i>=0;i--){
            this.heapify(arr,i,n)
        }
        let k=4
        console.log(arr[k-1]);
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

let array = [ 4,2,6,8,10]
let heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.insert(6)
heap.extractMax()
heap.buildHeap(array)
console.log(heap);

console.log(array);