// //Recursion



// // function recursion(n){
// //     if(n===1){
// //         return 0
// //     }
// //     console.log(n-1);
    
// //     return recursion(n-1)
// // }
// // console.log(recursion(8));


// //Factorial

// // function factorial(n){
// //     result = 1;  
// //     for(let i= 2;i <=n ; i++){
// //         result = result*i
// //     }
// //     return result
// // } 
// // console.log(factorial(1));
// // console.log(factorial(2));
// // console.log(factorial(3));
// // console.log(factorial(5));

// // Recursion -factorial

// // function factorial(n){
// //     if(n===0){
// //        return 1
// //     }
// //     return n*factorial(n-1)
// // }
// // console.log(factorial(5));


// //Linked List-insert

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }
// // class linked{
// //     constructor(){
// //         this.head = null
// //     }
// //     isEmpty(){
// //         this.head===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         node.next=this.head
// //         this.head=node
// //     }
// //     print(){
// //         let cur = this.head
// //         let ans = ''
// //         while(cur){
// //             ans+=cur.data+'->'
// //             cur=cur.next
// //         }
// //         console.log(ans);
        
// //     }
// // }
// // let link = new linked()
// // link.insert(1)
// // link.insert(2)
// // link.insert(3)
// // link.insert(4)
// // link.insert(5)
// // link.print()

// //Linked list-Delete

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }
// // class linked{
// //     constructor(){
// //         this.head = null
// //     }
// //     isEmpty(){
// //         this.head===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         node.next = this.head
// //         this.head=node
// //     }
// //     delete(data){
// //         let cur = this.head
// //         let prev = null
// //         while(cur){
// //             if(cur.data===data){
// //                 if(prev===null){
// //                     this.head=cur.next
// //                 }else{
// //                     prev.next=cur.next
// //                 }
// //                 cur=null
// //                 return
// //             }
// //             prev=cur
// //             cur=cur.next
// //         }
// //     }
// //     print(){
// //         let cur = this.head
// //         let ans = ''
// //         while(cur){
// //             ans+=cur.data+'->'
// //             cur = cur.next
// //         }
// //         console.log(ans);
        
// //     }
// // }
// // let link = new linked()
// // link.insert(1)
// // link.insert(2)
// // link.insert(3)
// // link.insert(4)
// // link.insert(5)
// // link.print()
// // link.delete(2)
// // link.print()

// //Linked list - reverse

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }
// // class linked{
// //     constructor(){
// //         this.head=null
// //     }
// //     isEmpty(){
// //         this.head===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         node.next = this.head
// //         this.head=node
// //     }
// //     print(){
// //         let cur = this.head
// //         let ans = ''
// //         while(cur){
// //             ans+=cur.data+'->'
// //             cur=cur.next
// //         }
// //         console.log(ans);
        
// //     }
// //     reverse(){
// //         let cur = this.head
// //         let prev = null
// //         let next = null
// //         while(cur){
// //             next = cur.next
// //             cur.next=prev
// //             prev = cur
// //             cur = next
// //         }
// //         this.head=prev
// //     }
// // }
// // let link = new linked
// // link.insert(1)
// // link.insert(2)
// // link.insert(3)
// // link.insert(4)
// // link.insert(5)
// // link.print()
// // link.reverse()
// // link.print()

// //Linked list - search

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }
// // class linked{
// //     constructor(){
// //         this.head = null
// //     }
// //     isEmpty(){
// //         this.head===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         node.next = this.head
// //         this.head=node
// //     }
// //     print(){
// //         let cur = this.head
// //         let ans = ''
// //         while(cur){
// //             ans+=cur.data+'->'
// //             cur=cur.next
// //         }
// //         console.log(ans)
        
// //     }
// //     search(data){
// //         let cur = this.head
// //         while(cur){
// //             if(cur.data===data){
// //                 return true
// //             }
// //             cur = cur.next
// //         }
// //         return false
// //     }
// // }
// // let link = new linked()
// // link.insert(1)
// // link.insert(2)
// // link.insert(3)
// // link.insert(4)
// // link.insert(5)
// // link.print()
// // console.log(link.search(2))

// // Linearsearch



// // function Linear(arr,target){
// //     for(let i=0;i<arr.length;i++){
// //         if(arr[i]===target){
// //             return i
// //         }
// //     }
// //     return -1
// // }
// // console.log(Linear(arr,2));

// //Linearsearch-recursion

// // function Linear(arr,target,index=0){
// //     if(index>=arr.length){
// //         return -1
// //     }
// //     if(arr[index]===target){
// //         return index
// //     }
// //     return Linear(arr,target,index+1)
// // }
// // console.log(Linear(arr,4));


// //BinarySearch

// // const arr = [3,6,1,4,2,5]

// // function BinarySearch(arr,target){
// //     let left = 0;
// //     let right = arr.length
// //     while(left<=right){
// //       let mid = Math.floor((left + right)/2)
// //       if(arr[mid]===target){
// //         return mid
// //       }
// //       if(arr[mid]<target){
// //         left = mid+1
// //       }else{
// //         right = mid-1
// //       }
// //     }
// //     return false
// // }
// // console.log(BinarySearch(arr,5));

// //BinarySearch-Recursion

// // function Binary(arr,target){
// //     arr.sort((a,b)=>a-b)
// //     let left =0;
// //     let right = arr.length
// //     return Search(arr,target,left,right)
// // }
// // function Search(arr,target,left,right){
// //     if(left>right){
// //         return -1
// //     }
// //     let mid = Math.floor((left+right)/2)
// //     if(arr[mid]===target){
// //         return mid
// //     }
// //     if(arr[mid]<target){
// //         return Search(arr,target,mid+1,right)
// //     }else{
// //         return Search(arr,target,left,mid-1)
// //     }
// // }
// // console.log(Binary(arr,4));

// //Selection Sort 

// // function Selection(arr){
// //     for(let i=0;i<arr.length;i++){
// //         small = i
// //         for(let j=i;j<arr.length;j++){
// //             if(arr[j]<arr[small]){
// //                 small = j

// //             }
// //         }
// //         [arr[small],arr[i]]=[arr[i],arr[small]]
// //     }
// //     return arr
// // }
// // console.log(Selection(arr));


// //Insertion sort

// // function Insertion(arr){
// //     for(let i=0;i<arr.length;i++){
// //        let curr = arr[i]
// //        let  j=i-1
// //         while(j>=0 && arr[j]>curr){
// //             arr[j+1]=arr[j]
// //             j--
// //         }
// //         arr[j+1]=curr
// //     }
// //     return arr
// // }
// // console.log(Insertion(arr));


// //Bubble sort

// //linked list-insert,delete,reverse,search

// //   class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// //   }
// //   class linked{
// //     constructor(){
// //         this.head = null
// //     }
// //     isMatch(){
// //         this.head===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         node.next = this.head
// //         this.head=node
// //     }
// //    delete(data){
// //     let cur = this.head
// //     let prev = null
// //     while(cur){
// //         if(cur.data===data){
// //             if(prev ===null){
// //               this.head=cur.next
// //             }else{
// //                 prev.next = cur.next
// //             }
// //             cur=null
// //             return
// //         }
// //         prev = cur
// //         cur=cur.next
// //     }
// //    }
// //   reverse(){
// //     let cur = this.head
// //     let prev = null
// //     let next = null
// //     while(cur){
// //         next = cur.next
// //         cur.next=prev
// //         prev=cur
// //         cur=next
// //     }
// //     this.head=prev
// //   }
// //   search(data){
// //     let cur = this.head
// //     while(cur){
// //         if(cur.data===data){
// //             return true
// //         }
// //         cur = cur.next
// //     }
// //     return false
// //   }
  
// //     print(){
// //         let cur = this.head
// //         let ans = ''
// //         while(cur){
// //             ans+=cur.data+'->'
// //             cur = cur.next
// //         }
// //         console.log(ans);
        
// //     }
// //   }
// //   let link = new linked()
// //   link.insert(1)
// //   link.insert(2)
// //   link.insert(3)
// //   link.insert(4)
// //   link.insert(5)
// //   link.print()
// //   link.reverse()
// //   link.print()
// //   link.delete(2)
// //   link.print()
// //   console.log(link.search(3));

// //-----------------------------------------------------------------------------------

// //fibonacci


// // function fibonacci(n){
// //     if(n<2){
// //         return n
// //     }
// //     return fibonacci(n-1)+fibonacci(n-2)
// // }
// // console.log(fibonacci(0))
// // console.log(fibonacci(1))
// // console.log(fibonacci(2))

// //---------------------------------------------------------------------


// //factorial


// // function factorial(n){
// //     if(n===0){
// //         return 1
// //     }
// //     return n*factorial(n-1)
// // }
// // console.log(factorial(0));
// // console.log(factorial(1));
// // console.log(factorial(3));
// // console.log(factorial(4));
// // console.log(factorial(5));

// //------------------------------------------------------------------------

// //palindrome

// // function isPalindrome(str){
// //     function palindrome(start,end){
// //         if(start>=end){
// //             return true
// //         }
// //         if(str[start]!==str[end]){
// //             return false
// //         }
// //         return palindrome(start+1,end-1)
// //     }
// //     return palindrome(0,str.length-1)
// // }
// // console.log(isPalindrome("madam"));

// //---------------------------------------------------------------------------------------

// // jagged array

// // let ab = [1,[2,3],[4,5,6],7]

// // function jagged(ab){
// //     let res=[]
// //     for(let i=0;i<ab.length;i++){
// //         let element = ab[i]
// //         if(Array.isArray(element)){
// //             res=res.concat(jagged(element))
// //         }else{
// //             res.push(element)
// //         }
// //     }
// //     return res
// // }
// // console.log(jagged(ab));

// //-----------------------------------------------------------------------------------------

// //jagged array reverse

// // let ab=[1,[2,3],[4,5,6],7]

// // function jaggedreverse(ab){
// //     let res = []
// //     for(let i=ab.length-1;i>=0;i--){
// //         let element = ab[i]
// //         if(Array.isArray(element)){
// //             res=res.concat(jaggedreverse(element))
// //         }else{
// //             res.push(element)
// //         }
// //     }
// //     return res
// // }
// // console.log(jaggedreverse(ab));

// //-----------------------------------------------------------------------------------------------

// // secondlargest

// // function secondLarge(arr,i=0,firstLargest=-Infinity,secondLargest=-Infinity){
// //     if(arr[i]===undefined){
// //         return secondLargest
// //     }
// //     if(arr[i]>firstLargest){
// //         secondLargest=firstLargest
// //         firstLargest=arr[i]
// //     }else if(arr[i]>secondLargest && arr[i]!=firstLargest){
// //         secondLargest = arr[i]
// //     }
// //     return secondLarge(arr,i+1,firstLargest,secondLargest)
// // }
// // console.log(secondLarge([1,2,3,4,8,5]))


// //-----------------------------------------------------------------------------------------------------


// //Buble sort

// // let arr = [8,3,9,2,1,4]

// // function Bubble(arr){
// //     let swapped
// //     do{
// //         swapped=false
// //         for(let i=0;i<arr.length-1;i++ ){
// //             if(arr[i]>arr[i+1]){
// //                 let temp = arr[i]
// //                 arr[i]=arr[i+1]
// //                 arr[i+1]=temp
// //                 swapped=true
// //             }
// //         }
// //     }
// //     while(swapped)
// // }
// // Bubble(arr)
// // console.log(arr);
 

// //Quick sort

// // let arr =[4,8,5,1,3,9,2,7,6]

// // function QuickSort(arr){
// //     if(arr.length<2){
// //         return arr
// //     }
// //     let pivot = arr[arr.length-1]
// //     let left = []
// //     let right = []
// //     for(let i=0;i<arr.length-1;i++){
// //         if(arr[i]<pivot){
// //             left.push(arr[i])
// //         }else{
// //             right.push(arr[i])
// //         }

// //     }
// //     return [...QuickSort(left),pivot,...QuickSort(right)]
// // }
// // console.log(QuickSort(arr));


// //mergesort

// // let arr = [4,6,1,2,5,3]

// // function mergesort(arr){
// //     if(arr.length<2){
// //         return arr
// //     }
// //     let mid = Math.floor(arr.length/2)
// //     let left = arr.slice(0,mid)
// //     let right = arr.slice(mid)
// //     return merge(mergesort(left),mergesort(right))
// // }
// // function merge(left,right){
// //     let subarray = []
// //     while(left.length&&right.length){
// //         if(left[0]<=right[0]){
// //             subarray.push(left.shift())
// //         }else{
// //             subarray.push(right.shift())
// //         }
// //     }
// //     return [...subarray,...left,...right]
// // }
// // console.log(mergesort(arr));


// //-----------------------------------------------------------------------------------------------------------------------------

// //SRACK AND QUEUE

// //stack using array


// // class stack{
// //     constructor(){
// //         this.item =[]
// //     }
// //     isEmpty(){
// //         return this.item.length==0
// //     }
// //     push(data){
// //         this.item.push(data)
// //     }
// //     pop(data){
// //         return this.item.pop(data)
// //     }
// //     print(){
// //         console.log(this.item);
        
// //     }
// //     size(){
// //         return this.item.length
// //     }
// //     middile(){
// //         let mid = Math.floor(this.size()/2)
// //         return this.item[mid]
// //     }
// //     peek(){
// //         return this.item[this.item.length-1]
// //     }
// //     reverse(){
// //         let revese = []
// //         while(!this.isEmpty()){
// //             revese.push(this.pop())
// //         }
// //         return revese
// //     }

// // }
// // let Stack = new stack()
// // Stack.push(1)
// // Stack.push(2)
// // Stack.push(3)
// // Stack.push(4)
// // Stack.push(5)
// // Stack.print()
// // Stack.pop()
// // Stack.print()
// // console.log(Stack.middile());
// // console.log(Stack.peek());
// // console.log(Stack.reverse());

// //Stack using linked list

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }
// // class Stack{
// //     constructor(){
// //         this.head = null
// //     }
// //     isEmpty(){
// //         return this.head===null
// //     }
// //     push(data){
// //         let node = new Node(data)
// //         if(this.isEmpty()){
// //             this.head=node
// //         }else{
// //             let cur = this.head
// //             while(cur.next){
// //                 cur=cur.next
// //             }
// //             cur.next = node
// //         }
        
// //     }
// //     pop(){
// //         if(this.isEmpty()){
// //             return null;
// //         }
// //         if(this.head.next == null){
// //             let temp = this.head;
// //             this.head = null;
// //             return temp;
// //         }
// //         let cur = this.head;
// //         while(cur && cur.next && cur.next.next){
// //             cur = cur.next
// //         }
// //         let temp = cur.next;
// //         cur.next=cur.next.next
// //     }

// //     reverse(){
// //         let cur = this.head
// //         let prev = null
// //         let next = null
// //         while(cur){
// //             next = cur.next
// //             cur.next = prev 
// //             prev = cur
// //             cur = next
// //         }
// //         this.head=prev
// //     }
// //     peek(){
// //         let cur= this.head
// //         while(cur.next){
// //             cur = cur.next
// //         }
// //         console.log(cur.data);
        
// //     }

// //     print(){
// //         let cur = this.head
// //         let ans = ''
// //         while(cur){
// //             ans+=cur.data+'->'
// //             cur = cur.next
// //         }
// //         console.log(ans);
        
// //     }

// // }
// // let stack = new Stack()
// // stack.push(1)
// // stack.push(2)
// // stack.push(3)
// // stack.push(4)
// // stack.push(5)
// // stack.print()
// // stack.pop()
// // stack.print()
// // stack.reverse()
// // stack.print()


// //singly linked list

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }
// // class linked{
// //     constructor(){
// //         this.head = null
// //     }
// //     isEmpty(){
// //         this.head===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         node.next = this.head
// //         this.head = node
// //     }
// //     reverse(){
// //         let cur = this.head
// //         let prev = null
// //         let next = null
// //         while(cur){
// //             next = cur.next
// //             cur.next = prev
// //             prev = cur
// //             cur= next
// //         }
// //         this.head=prev
// //     }
// //     search(data){
// //         let cur = this.head
// //         while(cur){
// //             if(cur.data===data){
// //                 return true
// //             }
// //             cur = cur.next
// //         }
// //         return false
// //     }
// //     delete(data){
// //         let cur = this.head
// //         let prev = null
// //         while(cur){
// //             if(cur.data===data){
// //                 if(prev===null){
// //                     this.head=cur.next
// //                 }else{
// //                     prev.next=cur.next
// //                 }
// //                 cur=null
// //                 return
// //             }
// //             prev = cur
// //             cur=cur.next
// //         }
// //     }
    
// //     deletemiddile(){
// //         if(this.isEmpty() || this.head===null){
// //             console.log("there is no element");
// //             return
// //         }
// //         let slow = this.head
// //         let fast = this.head
// //         let prev = null
// //         while(fast && fast.next){
// //             prev = slow
// //             slow = slow.next
// //             fast = fast.next.next
// //         }
// //         prev.next = slow.next
// //     }
// //     print(){
// //         let cur = this.head
// //         let ans = ''
// //         while(cur){
// //             ans+=cur.data+'->'
// //             cur = cur.next
// //         }
// //         console.log(ans);
        
// //     }
    
// // }
// // let link = new linked()
// // link.insert(1)
// // link.insert(2)
// // link.insert(3)
// // link.insert(4)
// // link.insert(5)
// // link.print()
// // link.reverse()
// // link.print()
// // link.deletemiddile()
// // link.print()
// // console.log(link.search(40));

// // recursion

// //bst

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.left = null
// //         this.right = null
// //     }
// // }
// // class Binary{
// //     constructor(){
// //         this.root = null
// //     }
// //     isEmpty(){
// //         return this.root === null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         if(this.isEmpty()){
// //             this.root=node
// //         }else{
// //             this.insertNode(this.root,node)
// //         }
// //     }
// //     insertNode(root,node){
// //        if(node.data<root.data){
// //         if(root.left===null){
// //             root.left = node
// //         }else{
// //             this.insertNode(root.left,node)
// //         }
// //        }else{
// //         if(root.right===null){
// //             root.right = node
// //         }else{
// //             this.insertNode(root.right,node)
// //         }
// //        }
// //     }
// //     preOrder(root){
// //         if(root){
// //             console.log(root.data);
// //             this.preOrder(root.left)
// //             this.preOrder(root.right)
// //         }
// //     }
// //     inOrder(root){
// //         if(root){
// //             this.inOrder(root.left)
// //             console.log(root.data);
// //             this.inOrder(root.right)
            
// //         }
// //     }
// //     postOrder(root){
// //         if(root){
// //             this.postOrder(root.left)
// //             this.postOrder(root.right)
// //             console.log(root.data);
            
// //         }
// //     }
// //     BFS(){
// //         let queue = []
// //         queue.push(this.root)
// //         while(queue.length){
// //             let cur = queue.shift()
// //             console.log(cur.data);
// //             if(cur.left){
// //                 queue.push(cur.left)
// //             }
// //             if(cur.right){
// //                 queue.push(cur.right)
// //             }
// //         }
// //     }
// //     min(root){
// //         if(!root.left){
// //             return root.data
// //         }else{
// //             return this.min(root.left)
// //         }
// //     }
// //     max(root){
// //         if(!root.right){
// //             return root.data
// //         }else{
// //             return this.max(root.right)
// //         }
// //     }
// //     search(root,data){
// //         if(!root){
// //             return false
// //         }else{
// //             if(root.data===data){
// //                 return true
// //             }else if(data<root.data){
// //                 return this.search(root.left)
// //             }else{
// //                 return this.search(root.right)
// //             }
// //         }
// //     }
// //     isBst(node=this.root,min=null,max=null){
// //         if(node===null){
// //             return true
// //         }
// //         if(node.data>=max && node.data<=min){
// //             return false
// //         }
// //         return this.isBst(node.left,min,node.data) && this.isBst(node.right,node.data,max)
// //     }
// //     sumOfBst(node=this.root){
// //         if(node===null){
// //             return 0
// //         }
// //         let leftNode = this.sumOfBst(node.left)
// //         let rightNode = this.sumOfBst(node.right)

// //         return node.data+leftNode+rightNode
// //     }
// //     sizeOfTree(node=this.root){
// //         if(node===null){
// //             return 0
// //         }
// //         return 1+this.sizeOfTree(node.left)+this.sizeOfTree(node.right)
// //     }
// //     heightOfTree(node=this.root){
// //         if(node===null){
// //             return -1
// //         }
// //         let leftHight = this.heightOfTree(node.left)
// //         let rightHight = this.heightOfTree(node.right)
// //         return Math.max(leftHight,rightHight)+1
// //     }
// // }
// // let bst = new Binary()
// // bst.insert(10)
// // bst.insert(5)
// // bst.insert(15)
// // bst.insert(3)
// // bst.insert(7)

// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root)
// // bst.BFS()
// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));
// // console.log(bst.search(bst.root,10));
// // console.log(bst.isBst());
// // console.log(bst.sumOfBst());
// // console.log(bst.sizeOfTree());
// // console.log(bst.heightOfTree());


// //Sorting

// // let arr = [1,5,2,4,3]

// // function mergesort(arr){
// //     if(arr.length<2){
// //         return arr
// //     }
// //     let middle = Math.floor(arr.length/2)
// //     let left = arr.slice(0,middle)
// //     let right = arr.slice(middle)
// //     return mergesort()

// // BST

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.left = null
// //         this.right = null
// //     }
// // }
// // class BST{
// //     constructor(){
// //         this.root=null
// //     }
// //     isEmpty(){
// //         return this.root === null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         if(this.isEmpty()){
// //             this.root=node
// //         }else{
// //             this.insertNode(this.root,node)
// //         }
// //     }
// //     insertNode(root,node){
// //         if(node.data<root.data){
// //             if(root.left===null){
// //                 root.left = node
// //             }else{
// //                 this.insertNode(root.left,node)
// //             }
// //         }else{
// //             if(root.right===null){
// //                 root.right = node
// //             }else{
// //                 this.insertNode(root.right,node)
// //             }
// //         }
// //     }
    
// //     preOrder(root){
// //         if(root){
// //             console.log(root.data);
// //             this.preOrder(root.left)
// //             this.preOrder(root.right)
// //         }
// //     }
// //     BFS(){
// //         let queue = []
// //         queue.push(this.root)
// //         while(queue.length){
// //             let cur = queue.shift()
// //             console.log(cur.data);
// //             if(cur.left){
// //                 queue.push(cur.left)
// //             }
// //             if(cur.right){
// //                 queue.push(cur.right)
// //             }
// //         }
// //     }
// //     max(root){
// //         if(!root.right){
// //             return root.data
// //         }else{
// //             return this.max(root.right)
// //         }
// //     }
// //     min(root){
// //         if(!root.left){
// //             return root.data
// //         }else{
// //             return this.min(root.left)
// //         }
// //     }
// //     search(root,data){
// //         if(!root){
// //             return false
// //         }else{
// //             if(root.data===data){
// //                 return true
// //             }else if(data<root.data){
// //                 return this.search(root.left)
// //             }else{
// //                 return this.search(root.right)
// //             }
// //         }
// //     }
// //     isBST(node=this.root,min=null,max=null){
// //         if(node===null){
// //             return true
// //         }
// //         if(node.data>=max && node.data<=min){
// //             return false
// //         }

// //         return this.isBST(node.left,min,node.data) && this.isBST(node.right,node.data,max)
// //     }
// //     sumOfBst(node=this.root){
// //         if(node===null){
// //             return 0
// //         }
// //         let leftSum = this.sumOfBst(node.left)
// //         let rightSum = this.sumOfBst(node.right)

// //         return node.data+leftSum+rightSum
// //     }
// //     sizeOfTree(node=this.root){
// //         if(node===null){
// //             return 0
// //         }
// //         let leftSize=this.sizeOfTree(node.left)
// //         let rightSize=this.sizeOfTree(node.right)

// //         return 1+leftSize+rightSize
// //     }

// //     hightOftheTree(node=this.root){
// //         if(node===null){
// //             return -1
// //         }
// //         let leftHight=this.hightOftheTree(node.left)
// //         let rightHight=this.hightOftheTree(node.right)

// //         return Math.max(leftHight,rightHight)+1

// //     }

// //     isBalanced(node=this.root){
// //         if(node===null){
// //             return true
// //         }
// //         let left = this.hightOftheTree(node.left)
// //         let right = this.hightOftheTree(node.right)
// //         if(Math.abs(left-right)<=1 && 
// //     this.isBalanced(node.left) &&
// //     this.isBalanced(node.right)){
// //         return true
// //     }
// //     return false
// //     }

// //     findLargest(node){
// //         if(node.right){
// //             node=node.right
// //         }
// //         return node.data
// //     }
    
    
// // }
// // let bst = new BST()
// // bst.insert(10)
// // bst.insert(15)
// // bst.insert(5)
// // bst.insert(3)
// // bst.insert(7)
// // bst.BFS()
// // console.log(bst.max(bst.root));
// // console.log(bst.min(bst.root));
// // console.log(bst.search(bst.root,10));
// // console.log(bst.isBST());
// // console.log(bst.sumOfBst());
// // console.log(bst.sizeOfTree());
// // console.log(bst.hightOftheTree());
// // console.log(bst.isBalanced());
// // console.log();
// // console.log(bst.findLargest(bst.root));

// //recursion

// //BST


// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.left = null
// //         this.right = null
// //     }
// // }
// // class Binary{
// //     constructor(){
// //         this.root = null
// //     }
// //     isEmpty(){
// //         return this.root===null
// //     }
// //     insert(data){
// //         const node = new Node(data)
// //         if(this.isEmpty()){
// //             this.root=node
// //         }else{
// //             this.insertNode(this.root,node)
// //         }
// //     }
// //     insertNode(root,node){
// //         if(node.data<root.data){
// //             if(root.left===null){
// //                 root.left = node
// //             }else{
// //                 this.insertNode(root.left,node)
// //             }
// //         }else{
// //             if(root.right===null){
// //                 root.right = node
// //             }else{
// //                 this.insertNode(root.right,node)
// //             }
// //         }
// //     }
// //     preOrder(root){
// //         if(root){
// //             console.log(root.data);
// //             this.preOrder(root.left)
// //             this.preOrder(root.right)
            
// //         }
// //     }
// //     BFS(){
// //         const queue = []
// //         queue.push(this.root)
// //         while(queue.length){
// //              let cur = queue.shift()
// //              console.log(cur.data);
// //              if(cur.left){
// //                 queue.push(cur.left)
// //              }
// //              if(cur.right){
// //                 queue.push(cur.right)
// //              }
// //         }
// //     }
// //     min(root){
// //         if(!root.left){
// //             return root.data
// //         }else{
// //             return this.min(root.left)
// //         }
// //     }
// //     max(root){
// //         if(!root.right){
// //             return root.data
// //         }else{
// //             return this.max(root.right)
// //         }
// //     }
// //     isBST(node = this.root,min=null,max=null){

// //         if(node===null){
// //             return true
// //         }
// //         if(node.data>=max  && node.data<=min){
// //             return false
// //         }
// //         return this.isBST(node.left,min,node.data)&&this.isBST(node.right,node.data,max)
// //     }
// //     sumOfBst(node=this.root){
// //         if(node===null){
// //             return 0
// //         }
// //         let leftSum = this.sumOfBst(node.left)
// //         let rightSum = this.sumOfBst(node.right)

// //         return node.data+leftSum+rightSum
// //     }
// //     sizeOfTree(node=this.root){
// //         if(node===null){
// //             return 0
// //         }
// //         let left = this.sizeOfTree(node.left)
// //         let right = this.sizeOfTree(node.right)

// //         return 1+left+right
// //     }
// //     hightOfTree(node=this.root){
// //         if(node===null){
// //             return -1
// //         }
// //         let leftN = this.hightOfTree(node.left)
// //         let rightN = this.hightOfTree(node.right)
// //         return Math.max(leftN,rightN)+1
// //     }
// // }
// // let bst = new Binary()
// // bst.insert(10)
// // bst.insert(5)
// // bst.insert(15)
// // bst.insert(3)
// // bst.insert(7)
// // bst.preOrder(bst.root)
// // bst.BFS()
// // console.log(bst.min(bst.root));
// // console.log(bst.max(bst.root));
// // console.log("Is Bst:",bst.isBST());
// // console.log("sum:",bst.sumOfBst());
// // console.log("size:",bst.sizeOfTree());
// // console.log("hight",bst.hightOfTree());

// //Linked list

// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }

// // }
// // class Linked{
// //     constructor(){
// //         this.head = null
// //     }
// //     isEmpty(){
// //         return this.head===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         if(this.head===null){
// //             this.head=node
// //         }else{
// //             let cur = this.head
// //             while(cur.next!==null){
// //                 cur=cur.next
// //             }
// //             cur.next = node
// //         }
// //     }
// //     reverse(){
// //         let cur = this.head
// //         let prev = null
// //         let next = null
// //         while(cur){
// //             next = cur.next
// //             cur.next=prev
// //             prev = cur
// //             cur= next
// //         }
// //         this.head=prev
// //     }
// //     delete(data){
// //         let cur = this.head
// //         let prev = null
// //         while(cur){
// //             if(cur.data===data){
// //                 if(prev===null){
// //                     this.head=cur.next
// //                 }else{
// //                     prev.next = cur.next
// //                 }
// //                 cur=null
// //                 return
// //             }
// //             prev = cur
// //             cur = cur.next
// //         }
// //     }
// //     // deleteMiddle(){
// //     //     if(this.isEmpty() || this.head===null){
// //     //         console.log("there is no element");
// //     //         return
// //     //     }
// //     //     let slow = this.head
// //     //     let fast = this.head
// //     //     let prev = null
// //     //     while(fast && fast.next){
// //     //         prev = slow
// //     //         slow = slow.next
// //     //         fast = fast.next.next
// //     //     }
// //     //     prev.next=slow.next
// //     // }
// //     deleteMiddle(){
// //         if(this.isEmpty()||this.head===null){
// //             console.log("there is no element");
// //             return
// //         }
// //         let slow = this.head
// //         let fast = this.head
// //         let prev = null
// //         while(fast&&fast.next){
// //              prev = slow
// //             slow = slow.next
// //             fast = fast.next.next
// //         }
// //         prev.next=slow.next
// //     }
// //     print(){
// //         let cur= this.head
// //         let ans = ""
// //         while(cur){
// //             ans+=cur.data+"->"
// //             cur = cur.next
// //         }
// //         console.log(ans);
        
// //     }
// // }
// // let linked = new Linked()
// // linked.insert(1)
// // linked.insert(2)
// // linked.insert(3)
// // linked.insert(4)
// // linked.insert(5)
// // linked.print()
// // linked.reverse()
// // linked.print()
// // linked.deleteMiddle()
// // linked.print()



// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.left = null
// //         this.right = null
// //     }
// // }
// // class Binary{
// //     constructor(){
// //         this.root = null
// //     }
// //     isEmpty(){
// //         return this.root===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         if(this.isEmpty()){
// //             this.root=node
// //         }else{
// //             this.insertNode(this.root,node)
// //         }
// //     }
// //     insertNode(root,node){
// //      if(node.data<root.data){
// //         if(root.left===null){
// //             root.left=node
// //         }else{
// //             this.insertNode(root.left,node)
// //         }
// //      }else{
// //         if(root.right===null){
// //             root.right=node
// //         }else{
// //             this.insertNode(root.right,node)
// //         }
// //      }
// //     }
// //     preOrder(root){
// //         if(root){
// //             console.log(root.data);
// //             this.preOrder(root.left)
// //             this.preOrder(root.right)
// //         }
// //     }
// //     inOrder(root){
// //         if(root){
// //             this.inOrder(root.left)
// //             console.log(root.data);
// //             this.inOrder(root.right)
// //         }
// //     }
// //     BFS(){
// //         let queue = []
// //         queue.push(this.root)
// //         while(queue.length){
// //             let cur = queue.shift()
// //             console.log(cur.data);
// //             if(cur.left){
// //                 queue.push(cur.left)
// //             }
// //             if(cur.right){
// //                 queue.push(cur.right)
// //             }
// //         }
// //     }
// // }
// // let bst = new Binary()
// // bst.insert(10)
// // bst.insert(5)
// // bst.insert(15)
// // bst.insert(3)
// // bst.insert(7)
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)


// //Graph

// // class Graph{
// //     constructor(){
// //         this.adjacencyList={}
// //     }
// //     addVertex(vertex){
// //         if(!this.adjacencyList[vertex]){
// //             this.adjacencyList[vertex]=new Set()
// //         }
// //     }
// //     addEdge(vertex1,vertex2){
// //         if(!this.adjacencyList[vertex1]){
// //             this.addVertex(vertex1)
// //         }
// //         if(!this.adjacencyList[vertex2]){
// //             this.addVertex(vertex2)
// //         }
// //         this.adjacencyList[vertex1].add(vertex2)
// //         this.adjacencyList[vertex2].add(vertex1)
// //     }
// //     display(){
// //         for(let vertex in this.adjacencyList){
// //             console.log(vertex+"->"+[...this.adjacencyList[vertex]]);
            
// //         }
// //     }
// //     DFS(start){
// //         const stack = [start]
// //         const result = []
// //         const visited = {}
// //         visited[start]=true
// //         while(stack.length){
// //             let current = stack.pop()
// //             result.push(current)

// //             this.adjacencyList[current].forEach(neighbor => {
// //                 if(!visited[neighbor]){
// //                     visited[neighbor]=true
// //                     stack.push(neighbor)
// //                 }
// //             });
// //         }
// //         return result
// //     }
// // }
// // let graph = new Graph()
// // graph.addVertex("A")
// // graph.addVertex("B")
// // graph.addEdge("A","B")
// // graph.addEdge("B","C")
// // graph.display()
// // console.log(graph.DFS('A'));



// //Graph

// // class Graph {
// //     constructor(){
// //         this.adjacencyList={}
// //     }
// //     addVertex(vertex){
// //        if(!this.adjacencyList[vertex]){
// //         this.adjacencyList[vertex]=new Set()
// //        }
// //     }
// //     addEdge(vertex1,vertex2){
// //         if(!this.adjacencyList[vertex1]){
// //             this.addVertex(vertex1)
// //         }
// //         if(!this.adjacencyList[vertex2]){
// //             this.addVertex(vertex2)
// //         }
// //         this.adjacencyList[vertex1].add(vertex2)
// //         this.adjacencyList[vertex2].add(vertex1)
// //     }
// //     removeEdge(vertex1,vertex2){
// //         this.adjacencyList[vertex1].delete(vertex2)
// //         this.adjacencyList[vertex2].delete(vertex1)
// //     }
// //     display(){
// //         for(let vertex in this.adjacencyList){
// //             console.log(vertex+"->"+[...this.adjacencyList[vertex]]);
            
// //         }
// //     }
// //     DFS(start){
// //           let stack = [start]
// //           let result =[]
// //           let visited ={}
// //           visited[start]=true
// //           while(stack.length){
// //             const current = stack.pop()
// //             result.push(current)

// //             this.adjacencyList[current].forEach(element => {
// //                 if(!visited[element]){
// //                     visited[element]=true
// //                     stack.push(element)
// //                 }
// //             });
// //           }
// //           return result
// //     }
// //     BFS(start){
// //         let queue = [start]
// //         let result = []
// //         let visited = {}
// //         visited[start]=true
// //         while(queue.length){
// //             let current = queue.shift()
// //             result.push(current)
// //             this.adjacencyList[current].forEach((element)=>{
// //                 if(!visited[element]){
// //                     visited[element]=true
// //                     queue.push(element)
// //                 }
// //             })
// //         }
// //         return result
// //     }

// // }
// // let graph = new Graph()
// // graph.addVertex("A")
// // graph.addVertex("B")
// // graph.addVertex("C")
// // graph.addEdge("A","B")
// // graph.addEdge("B","C")
// // graph.display()


// // console.log(graph.DFS("A"));
// // console.log(graph.BFS("A"));

// // class MaxHeap{
// //     constructor(){
// //         this.heap = []
// //     }
// //     getParentIndex(index){
// //         return Math.floor((index-1)/2)
// //     }
// //     getLeftChildIndex(index){
// //         return 2*index+1
// //     }
// //     getRightChildIndex(index){
// //         return 2*index+2
// //     }
// //     swap(index1,index2){
// //         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
// //     }
// //     insert(data){
// //         this.heap.push(data)
// //         this.heapifyUp()
// //     }
// //     heapifyUp(){
// //         let index = this.heap.length-1
// //         while(index>0){
// //             let parentIndex = this.getParentIndex(index)
// //             if(this.heap[parentIndex]<this.heap[index]){
// //                 this.swap(index,parentIndex)
// //                 index = parentIndex
// //             }else{
// //                 break
// //             }
// //         }
// //     }
// //     removeMax(){
// //         if(this.heap.length===0){
// //             return null
// //         }
// //         if(this.heap.length===1){
// //             return this.heap.pop()
// //         }
// //         let max = this.heap[0]
// //         this.heap[0]=this.heap.pop()
// //         this.heapifyDown()
// //         return max
// //     }
// // }
// // let max = new MaxHeap()
// // max.insert(57)
// // max.insert(50)
// // max.insert(590)
// // max.insert(45)
// // max.insert(570)
// // max.insert(900)
// // max.insert(5)
// // max.insert(90)
// // max.insert(86)
// // console.log(max.heap);

// // class Graph{
// //     constructor(){
// //         this.adjacencyList = {}
// //     }
// //     addVertex(vertex){
// //         if(!this.adjacencyList[vertex]){
// //             this.adjacencyList[vertex]=new Set()
// //         }
// //     }
// //     addEdge(vertex1,vertex2){
// //        if(!this.adjacencyList[vertex1]){
// //         this.addVertex(vertex1)
// //        }
// //        if(!this.adjacencyList[vertex2]){
// //         this.addVertex(vertex2)
// //        }
// //        this.adjacencyList[vertex1].add(vertex2)
// //         this.adjacencyList[vertex2].add(vertex1)
// //     }
// //     display(){
// //         for(let vertex in this.adjacencyList){
// //             console.log(vertex+"->"+[...this.adjacencyList[vertex]]);
            
// //         }
// //     }
// //     DFS(start){
// //         const stack = [start]
// //         let result = []
// //         let visited = {}
// //         visited[start]=true
// //         while(stack.length){
// //             let current = stack.pop()
// //             result.push(current)
// //             this.adjacencyList[current].forEach(element => {
// //                 if(!visited[element]){
// //                     visited[element]=true
// //                     stack.push(element)
// //                 }
// //             });
// //         }
// //         return result
// //     }
// //     BFS(start){
// //         const queue = [start]
// //         let result = []
// //         let visited = {}
// //         visited[start]= true
// //         while(queue.length){
// //             let current = queue.shift()
// //             result.push(current)

// //             this.adjacencyList[current].forEach((element)=>{
// //                 if(!visited[element]){
// //                     visited[element]=true
// //                     queue.push(element)
// //                 }
// //             })
// //         }
// //         return result
// //     }
// // }
// // let graph = new Graph()
// // graph.addVertex("A")
// // graph.addVertex("B")
// // graph.addVertex("C")

// // graph.addEdge("A","B")
// // graph.addEdge("B","C")
// // graph.display()
// // console.log(graph.DFS("A"));

// // console.log(graph.BFS("A"));


// // function mergesort(arr){
// //     if(arr.length<2){
// //         return arr
// //     }
// //     let middle = Math.floor(arr.length/2)
// //     let left = arr.slice(0,middle)
// //     let right = arr.slice(middle)
// //     return merge(mergesort(left),mergesort(right))
// // }
// // function merge(left,right){
// //     let swapped = []
// //     while(left.length && right.length){
// //         if(left[0]<right[0]){
// //             swapped.push(left.shift())
// //         }else{
// //             swapped.push(right.shift())
// //         }
// //     }
// //     return [...swapped,...left,...right]
// // }
// // let arr = [1,5,2,4,3]
// // console.log(mergesort(arr));



// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.left = null
// //         this.right = null

// //     }
// // }
// // class Binary{
// //     constructor(){
// //         this.root = null
// //     }
// //     isEmpty(){
// //         return this.root===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         if(this.isEmpty()){
// //             this.root=node
// //         }else{
// //             this.insertNode(this.root,node)
// //         }
// //     }
// //     insertNode(root,node){
// //         if(node.data<root.data){
// //             if(root.left===null){
// //                 root.left = node
// //             }else{
// //                 this.insertNode(root.left,node)
// //             }
// //         }else{
// //             if(root.right===null){
// //                 root.right = node
// //             }else{
// //                 this.insertNode(root.right,node)
// //             }
// //         }
// //     }
// //     preOrder(root){
// //         if(root){
// //             console.log(root.data);
// //             this.preOrder(root.left)
// //             this.preOrder(root.right)
// //         }
// //     }
// //     inOrder(root){
// //         if(root){
// //             this.inOrder(root.left)
// //             console.log(root.data);
// //             this.inOrder(root.right)
// //         }
// //     }
// //     postOrder(root){
// //         if(root){
// //             this.postOrder(root.left)
// //             this.postOrder(root.right)
// //             console.log(root.data);
            
// //         }
// //     }
// //     BFS(){
// //         let queue = []
// //         queue.push(this.root)
// //         while(queue.length){
// //             let cur = queue.shift()
// //             console.log(cur.data);
// //             if(cur.left){
// //                 queue.push(cur.left)
// //             }
// //             if(cur.right){
// //                 queue.push(cur.right)
// //             }
// //         }
// //     }
// //     max(root){
// //         if(root.right===null){
// //            return root.data
// //         }else{
// //             return this.max(root.right)
// //         }
// //     }
// //     min(root){
// //         if(root.left===null){
// //             return root.data
// //         }else{
// //             return this.min(root.left)
// //         }

// //     }
// //     isBST(node=this.root,min=null,max=null){
// //         if(node===null){
// //             return true
// //         }
// //         if(node.data>=max && node.data<=min){
// //             return false
// //         }
// //         return this.isBST(node.left,min,node.data) && this.isBST(node.right,node.data,max)
// //     }
// //     sumOfBst(node=this.root){
// //         if(node===null){
// //             return 0
// //         }
// //         let leftSum = this.sumOfBst(node.left)
// //         let rightSum = this.sumOfBst(node.right)

// //         return node.data+leftSum+rightSum
// //     }
// //     sizeOfTree(node=this.root){
// //         if(node===null){
// //             return 0
// //         }
// //         let leftSum = this.sizeOfTree(node.left)
// //         let rightSum = this.sizeOfTree(node.right)
// //         return 1+leftSum+rightSum
// //     }
    
// // }
// // let bst = new Binary()
// // bst.insert(10)
// // bst.insert(5)
// // bst.insert(15)
// // bst.insert(3)
// // bst.insert(7)
// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root)
// // bst.BFS()
// // console.log(bst.max(bst.root));
// // console.log(bst.min(bst.root));
// // console.log(bst.isBST(bst.root));
// // console.log(bst.sumOfBst(bst.root));

// // console.log(bst.sizeOfTree(bst.root));


// // 



// // class Node{
// //     constructor(data){
// //         this.data = data
// //         this.next = null
// //     }
// // }
// // class Linked{
// //     constructor(){
// //         this.head = null
// //     }
// //     isEmpty(){
// //         return this.head===null
// //     }
// //     insert(data){
// //         let node = new Node(data)
// //         if(this.isEmpty()){
// //             this.head=node
// //         }else{
// //             let cur = this.head
// //             while(cur.next){
// //                 cur=cur.next
                
// //             }
// //             cur.next = node
// //         }
// //     }
// //     total(){
// //         let count = 0
// //         let cur = this.head
// //         while(cur){
// //             count++
// //             cur = cur.next
// //         }
// //         return count
// //     }
// //     sum(){
// //         let total = 0
// //         let cur = this.head
// //         while(cur){
// //             total+=cur.data
// //             cur = cur.next
// //         }
// //         return total

// //     }
// //     sumof5(){
// //         let total = 0
// //         let count = 0
// //         let cur =  this.head
// //         while(cur && count<5){
// //            total +=cur.data
// //            cur = cur.next
// //            count++
// //         }
// //         return total
// //     }
// //     sumof5(){
// //         let total = 0
// //         let count = 0
// //         let cur =  this.head
// //         while(cur && count>5){
// //            total +=cur.data
// //            cur = cur.next
// //            count++
// //         }
// //         return total
// //     }
// //     print(){
// //         let cur = this.head
// //         let ans= ''
// //         while(cur){
// //             ans+=cur.data+'->'
// //             cur =cur.next
// //         }
// //         console.log(ans);
        
// //     }
// // }
// // let link = new Linked()
// // link.insert(1)
// // link.insert(2)
// // link.insert(3)
// // link.insert(4)
// // link.insert(5)
// // link.insert(10)
// // link.insert(20)
// // link.print()
// // console.log(link.total());
// // console.log(link.sum())
// // console.log(link.sumof5());


// // 


// // function BinarySearch(arr,target){
// //     arr.sort((a,b)=>a-b)
// //     return Search(arr,target,0,arr.length-1)
// // }
// // function Search(arr,target,leftIndex,rightIndex){
// //     if(leftIndex>rightIndex){
// //         return -1
// //     }
// //     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
// //     if(target===arr[middleIndex]){
// //         return middleIndex
// //     }
// //     if(target<arr[middleIndex]){
// //         return Search(arr,target,leftIndex,middleIndex-1)
// //     }else{
// //         return Search(arr,target,middleIndex+1,rightIndex)
// //     }
// // }
// // let arr = [1,4,2,3,5]
// // console.log(BinarySearch(arr,5))


// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeftChildIndex(index){
//         return 2*index+1
//     }
//     getRightChildIndex(index){
//         return 2*index+2
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }
//     insert(data){
//         this.heap.push(data)
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let index = this.heap.length-1
//         while(index>0){
//             let parentIndex = this.getParentIndex(index)
//             if(this.heap[parentIndex]<this.heap[index]){
//                 this.swap(index,parentIndex)
//                 index=parentIndex
//             }else{
//                 break;
//             }
//         }
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//            return this.heap.pop()
//         }
//         let max = this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown()
//         return max
//     }
//     sort(){
//         let size=this.heap.length
//         let arr=[]
//         for(let i=0;i<size;i++){
//             arr.push(this.remove())

//         }
//         return arr
//     }
//     heapifyDown(){
//         let index = 0
//         while(true){
//             let left = this.getLeftChildIndex(index)
//             let right = this.getRightChildIndex(index)
//             let largest = index
//             if(left<this.heap.length && this.heap[left]>this.heap[largest]){
//                 largest = left
//             }
//             if(right<this.heap.length && this.heap[right]>this.heap[largest]){
//                 largest = right
//             }
//             if(index!=largest){
//                 this.swap(index,largest)
//                 index=largest
//             }else{
//                 break;
//             }
//         }
//     }
// }
// let max=new MaxHeap()
// max.insert(28)
// max.insert(78)
// max.insert(38)
// max.insert(68)
// max.insert(18)
// max.insert(98)
// max.insert(48)
// // max.insert(88)
// max.insert(58)
// console.log(max.heap)
// // max.remove()
// console.log(max.sort());


//BST

// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }
//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeftChildIndex(index){
//         return 2*index+1
//     }
//     getRightChildIndex(index){
//         return 2*index+2
//     }
//     swap(index1,index2){
//         [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }
//     insert(data){
//         this.heap.push(data)
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let index = this.heap.length-1
//         while(index>0){
//             let parentIndex = this.getParentIndex(index)
//             if(this.heap[parentIndex]<this.heap[index]){
//                 this.swap(index,parentIndex)
//                 index = parentIndex
//             }else{
//                 break
//             }
//         }
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             this.heap.pop()
//         }
//         let max =  this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown()
//         return max
//     }
//     heapifyDown()
// }
// let max = new MaxHeap()
// max.insert(45)
// max.insert(56)
// max.insert(99)
// max.insert(12)
// max.insert(67)
// max.insert(48)
// max.insert(85)
// max.insert(35)
// max.insert(77)
// max.insert(20)
// console.log(max.heap);

// class Node{
//     constructor(data){
//           this.data = data
//           this.next = null
//     }
// }
// class Linked{
//     constructor(){
//         this.head = null
//     }
//     isEmpty(){
//         return this.head===null
//     }
//     insert(data){
//         let node = new Node(data)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let cur = this.head
//             while(cur.next){
//                 cur=cur.next
//             }
//             cur.next = node
//         }
//     }
//     reverse(){
//         let cur = this.head
//         let prev = null
//         let next = null
//         while(cur){
//             next = cur.next
//             cur.next = prev
//             prev = cur
//             cur = next
//         }
//         this.head=prev
//     }
//     search(data){
//         let cur = this.head
//         while(cur){
//         if(cur.data===data){
//             return true
//         }
//         cur = cur.next
//         }
//         return false
//     }
//     sort(){
//         if(this.isEmpty()){
//             return
//         }
//         let swapped
//         do{
//             swapped = false
//             let cur = this.head
//             while(cur.next){
//                 if(cur.data>cur.next.data){
//                     let temp = cur.data
//                     cur.data = cur.next.data
//                     cur.next.data = temp
//                     swapped = true
//                 }
//                 cur=cur.next
//             }
//         }while(swapped)
//     }
//     print(){
//         let cur = this.head
//         let ans = ""
//         while(cur){
//             ans+=cur.data+'->'
//             cur=cur.next

//         }
//         console.log(ans);
        
//     }
// }
// let link = new Linked()
// link.insert(4)
// link.insert(2)
// link.insert(5)
// link.insert(3)
// link.insert(1)
// link.print()
// link.reverse()
// link.print()
// console.log(link.search(40));

// link.sort()
// link.print()



// function fibonacci(n){
//     if(n<2){
//         return n 
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(7));
// console.log(fibonacci(8));




function fibonacci(n){
   if()
}