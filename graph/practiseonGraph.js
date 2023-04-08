class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[]
    }

    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=> v!=vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v=> v!=vertex1)
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacencyList = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacencyList)
        }
        delete this.adjacencyList[vertex]
    }

   dfsRecursive(start){
    const result = []
    const visited = {};
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex]=true;
        result.push(vertex)
        adjacencyList[vertex].forEach(connect =>{
            if(!visited[connect]){
                return dfs(connect)
            }
        })
    })(start)
    return result
   }
}

let G = new Graph()
G.addVertex("A")
G.addVertex("B")
G.addVertex("C")
G.addVertex("D")
G.addEdge("A","B")
G.addEdge("C","D")
G.addEdge("A","D")
// G.removeEdge("A","D")
// G.removeVertex('D')
console.log(G.adjacencyList["A"])

console.log(G.dfsRecursive("A"))
