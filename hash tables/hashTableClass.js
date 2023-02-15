class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    hash(key){
        let total = 0;
        let prime = 31;
        for(let i = 0 ;i< Math.min(key.length,100);i++){
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total * prime+value)%this.keyMap.length;
        }
        return total;
    }
    set(key){
        let index = this.hash(key);
        if(!this.index[key]){
            this.index[key]=[];

        }
        this.keyMap[index].push([key,value])
    }

    get (key){
        let index = this.hash(key)
        if(this.keyMap[index]){
            for(let i =0;i<this.keyMap[index].length;i++){
                if(this.keyMap[i][0]===key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }

    delete(key){
        let index = this.hash(key)
        if(this.keyMap[index]){
            for(let i=0;i<this.keyMap[index].length;i++){
                if(this.keyMap[i][0]===key){
                    this.keyMap[index][i][0].pop[key,value]
                    console.log("deleted");
                }
            }
        }
        return undefined
    }
}


let myHashTable = new HashTable(53);
let variable = myHashTable.hash("pink")
let variables = myHashTable.hash("red")
myHashTable.delete('red')
console.log(variable);
console.log(variables);