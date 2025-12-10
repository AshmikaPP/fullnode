//1- let arr = [10,4,3,9,8]

// let x = 7

// //output = [8,9,10,4,3]

// let result = []

// for(let i=0;i<arr.length;i++){
//     result.push(Math.abs(arr[i]-x))
    
    

    
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<result.length;j++){
//       if(arr[i])
//     }
// }
// console.log(result)//Not complete

//----------------------------------------------------------------------------------------------------

//2-Write a program to find the  largest number in an array.

// let arr = [1,4,2,3,5,8,6]

//  let result = arr.reduce((acc,curr)=>{
//     let [first,second]=acc
//     if(curr>first){
//         acc = [curr,first]
//     }else if(curr!==first && curr>second){
//         acc  = [first,curr]
//     }
//     return acc
    
//  },[-Infinity,-Infinity])
//  console.log(result[1]);
 
//---------------------------------------------------------------------
// let first = 0
// let slargest = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>first){
//         slargest = first
//         first = arr[i]
//     }else if(arr[i]!==first && arr[i]>slargest){
//         slargest=arr[i]
//     }

// } 
// console.log(slargest);

//------------------------------------------------------------------------

//3.Reverse a string without using built-in functions

// let string = "hello"
// let result=''
// for(let i=string.length-1;i>=0;i--){
//    result+=string[i]
// }
// console.log(result);

//------------------------------------------------------------------------

// let string = "hello"

// function stringString(string){
//     if(string.length<=1){
//         return string
//     }
//     return stringString(string.substring(1))+string[0]
// }
// console.log(stringString(string));

//-------------------------------------------------------------------------------

//4.Check if a given string is a palindrome.

// let string = "malayalam"

// let a = string.split('').join('')
// let b = a.split('').reverse().join('')
// if(b===a){
//     console.log("true");
    
// }else{
//     console.log("false");
    
// }

//---------------------------------------------------------------------------------

// let string = "malayalammm"

// function isPalindrome(string){
//     function palindrome(start,end){
//         if(start>end){
//             return true
//         }
//         if(string[start]!==string[end]){
//             return false
//         }
//         return palindrome(start+1,end-1)
//     }
//     return palindrome(0,string.length-1)
// }
// console.log(isPalindrome(string));


// find the number is prime numbers

// let arr = [1,2,3,4,5,6,6,7]

// let a = []

// for(let i=0;i<arr.length;i++){
//     let num = arr[i]
//     let prime = true
//     if(num<2){
//         prime = false
//     }else{
//         for(let j=2;j<num;j++){
//             if(num%j==0){
//                 prime = false
//                 break;
//             }
//         }
//     }
//     if(prime){
//       a.push(num)
//     }
    
// }
// console.log(a)


//// Input: [1, 2, 2, 3, 1]
// Output: {1: 2, 2: 2, 3: 1}


// let a = [1,2,2,3,1]

// let res = {}

// for(let i=0;i<a.length;i++){
//     let num = a[i]
//     if(res[num]){
//         res[num]++
//     }else{
//         res[num] =1
//     }
// }

// console.log(res);



// let arr =[[2,5,8,9],[9,3,2,5],[2,5,9,9],[3,2,5,9]]

// let array = arr.flat()

// let count = 0 
// for(let i=0;i<array.length;i++){
// 	if(array[i]===9){
// 		count++
// 	}
// }
// console.log(count);


// let arr =[[2,5,8,9],[9,3,2,5],[2,5,9,9],[3,2,5,9]]

// let array = arr.flat()
// console.log(array);

// let count =0

// function arrays(target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             count++
//         }
//     }
//     return count
// }
// console.log(arrays(9));



//remove duplicate even numbers

// let arr =[1,5,2,4,3,6,7,8,4,2,3]

// let unique = []
// let duplicate = []

// for(let i=0;i<arr.length;i++){
//     let num = arr[i]
//     if(num%2==0){
//         if(!duplicate.includes(num)){
            
//             duplicate.push(num)
//         }
//     }else{
//         duplicate.push(num)
//     }

// }
// console.log(unique)
// console.log(duplicate)

//Convert "hello world" to "word Hello".

// let str =  "hello world"

// let string = str.split(' ').reverse().join(' ')
// console.log(string)

//Convert "hello world" to "olleh dlrow".

// let str = "hello world"

// let string = str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
// console.log(string)

//Find the second largest word from a sentence.

// let str = "i love and like coding"


// let string = str.split(' ')
// let word = string.sort((a,b)=>a.length-b.length)
// let slarge = word[1]
// console.log(slarge)


// Remove duplicate characters from a string.

// let str = "hello"

// let string = str.split('')

// let duplicate = []
// for(let i=0;i<string.length;i++){
//    let num = string[i]
//    if(!duplicate.includes(num)){
//     duplicate.push(num)
//    }
// }
// console.log(duplicate.join(''))

//Input: "a2b3c4d6"
//Output: "aabbbccccdddddd"

// let str = "a2b3c4d6"

// let string = str.split('')
// let res = []
// let output = ''
// for(let i=0;i<string.length;i++){
//     if(i%2!==0){
//        let char = string[i-1]
//        let count = Number(string[i])
//        res.push(char.repeat(count))
       
       
//     }
// }
//  output = res.join('')
//  console.log(output);

//Input:"aabbbccccdddddd"
//Output:"a2b3c4d6"

// let str = "aabbbccccdddddd"

// let count = 1
// let res = ''
// for(let i=0;i<str.length;i++){
//     if(str[i]===str[i+1]){
//        count++
//     }else{
//         res+=str[i]+count
//         count =1
//     }
// }
// console.log(res)

// const ab = [[123, 23, 12], [5, 23, 4, 12], [123, 4, 123, 41, 2]];

// let res = ab.map((value,index)=>{
//     return {value:value,index:index}
// })
// console.log(res);


//input = [-1,-2,-3,-4,1,2,3,4,5,6,7]
//output = [-1,1,-2,2,-3,3,-4,4,5,6,7]

let a = [-1,-2,-3,-4,1,2,3,4,5,6,7]

let res = []
let result = []

let array = []

for(let i=0;i<a.length;i++){
    


}
console.log(res);
console.log(result);

