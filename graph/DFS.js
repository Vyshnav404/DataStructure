class Graph{
    constructor(){
        this.adjacencyList = {}
    }

   addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
   } 

   addEdge(v1,v2){
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1)
   }

   removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v!=vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v!== vertex1);
   }

   removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex,adjacentVertex);
    }
    delete this.adjacencyList[vertex]
   }

   //Recursion

   DFSrecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true; 
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        })
    })(start);
    return result;
    
   }

   //Iteration
  
   DfSIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentValue ;

    visited[start] = true;
    while(stack.length){
        currentValue = stack.pop()
        result.push(currentValue)

        this.adjacencyList[currentValue].forEach(connect =>{
            if(!visited[connect]){
                visited[connect] = true
                stack.push(connect)
            }

        })
    }
    return result;
   }

}

let g = new Graph()
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")
g.addEdge("Tokyo","Aspen")
g.addEdge("Tokyo","Dallas")
g.addVertex('Los Angeles')
g.addVertex('Hong Kong')

g.addEdge("Dallas","Tokyo")
g.addEdge("Dallas","Aspen")
g.addEdge("Hong Kong","Tokyo")
g.addEdge("Hong Kong","Dallas")
g.addEdge("Los Angeles","Hong Kong")
g.addEdge("Los Angeles","Aspen")
// g.removeVertex("Hong Kong")
console.log(g.DFSrecursive("Tokyo"))
console.log(g.DfSIterative('Tokyo'))

console.log(g);