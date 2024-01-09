function createNode(value = null){
    return {
        value, 
        nextNode: null
    };
};
function listFactory(){
    return {
        listHead:null, 

        prepend(value){
            let tmp = null;
            if(this.listHead !== null){
                tmp = this.listHead;
            };
            this.listHead = createNode(value);
            this.listHead.nextNode = tmp;
        },
        append(value){
            if(this.listHead === null){
                this.listHead = createNode(value)
            }
            else {
                let node = this.listHead;
                while(node.nextNode !== null){
                    node = node.nextNode;
                }
                node.nextNode = createNode(value);
            }
        },
        head(){
            return this.listHead;
        },
        tail(){
            let node = this.listHead;
            while(node){
                if(node.nextNode === null){
                    return node
                };
                node = node.nextNode;
            };
        },
        at(index){
            let node = this.listHead;
            for(let i = 0; i < index; i++){
                node = node.nextNode;
                if(node === null) return 'No node for this index';
            };
            return node
        },
        pop(){
            let node = this.listHead;
            while(node){
                if(node.nextNode.nextNode === null){
                    node.nextNode = null;
                    return
                };
                node = node.nextNode;
            };
            
        },
        size(){
            let i = 0;
            let node = this.listHead;
            while(node){
                i += 1;
                node = node.nextNode;
            };
            return i;
        },
        contains(value){
            let node = this.listHead;
            while(node){
                if(value === node.value){
                    return True
                }
                node = node.nextNode
            };
            return False;
        },
        find(value){
            let node = this.listHead;
            let i = 0;
            while(node){
                if(value === node.value){
                    return i;
                }
                node = node.nextNode;
                i += 1;
            }
            return null
        },
        toString(){
            let string = "";
            let node = this.listHead;
            while(node){
                string += ` ${node.value} ->`;
                node = node.nextNode;
            };
            return string += 'null'
        },
        insert(value, index){
            if (this.listHead === null){
                this.listHead = createNode(value);
            }
            else{
                let node = this.listHead;
                for(let i = 0; i < index - 1; i++){
                    console.log('itteration');
                    node = node.nextNode;
                    if(node === null) return;
                };
                console.log(node);
                let next = node.nextNode;
                let newNode = createNode(value);
                node.nextNode = newNode;
                newNode.nextNode = next;
            }
        },
        remove(index){
            let node = this.listHead;
            let previous = null;
            if(this.listHead === null) return 'list is empty';
            for(let i = 0; i < index - 1; i++){
                console.log('itteration');
                node = node.nextNode;
                if(node === null) return;
            };
            if(node.nextNode){
                previous = node.nextNode.nextNode;
            }
            node.nextNode = previous;
        }
    };
};
const theList = listFactory();
theList.append(10);
theList.append(30);
theList.append(40);
theList.remove(2);
console.log(theList.toString());