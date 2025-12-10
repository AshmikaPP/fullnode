//delete dublicate elements

// let arr = [1,3,5,7,3,5]

// let unique = []
// let duplicate = []

// let result=[]

// for(let i=0;i<arr.length;i++){
//     let nums=arr[i]
//     if(!unique.includes(arr[i])){
//         unique.push(nums)
//     }else{
//         duplicate.push(nums)
//     }

// }
// for(let i=0;i<arr.length;i++){
//     let num=arr[i]
//     if(!duplicate.includes(arr[i])){
//         result.push(num)
//     }
// }
// console.log(unique);
// console.log(duplicate);
// console.log(result);

// const arra =[{ab:[3,-5,-8,40],ab:[-68,78,-23,-10],ab:[49,33,-12,98],ab:[-99,22,-66]}]

// //find the no of negative numbers in the subarray separete
// //find the sum of last 2 element of subarray separetly
// //find the total sum of sub array separete

// let str = 'ashmika'
// let b=str.split('').reverse().join('')
// console.log(b);

// // Corrected Code
// function isPalindrome(str) { // ✅ Fixed: Changed 'unction' to 'function'.
//     function Palindrome(start, end) {
//         if (start >= end) {
//             return true;
//         }
//         if (str[start] !== str[end]) {
//             return false;
//         }
//         return Palindrome(start + 1, end - 1);
//     }

//     return Palindrome(0, str.length - 1);
// }

// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("malayalam")); // Output: true

// let a = [1,2,3,4,5]
// let b = [2,6,3,7,1]

// ;

// input
// const ab = [[123, 23, 12], [5, 23, 4, 12], [123, 4, 123, 41, 2]];

// output:
//  [
//    { row: [123, 23, 12], index: 0 },
//    { row: [5, 23, 4, 12], index: 1 },
//    { row: [123, 4, 123, 41, 2], index: 2 }
//  ]
//------------------------------------------------Ans-1
// let res = ab.map((value,index)=>{
//     return {value:value,index:index}
// })
// console.log(res)
//-----------------------------Ans-2

// let res = []
// for(let i=0;i<ab.length;i++){
//     res.push({row:ab[i],index:i})
// }
// console.log(res);

//---------------------------------------------------------------------------------------
// Input: ['apple', 'banana', 'kiwi']
// const Input=['apple', 'banana', 'kiwi']

// Output:
// [
//   { word: 'apple', length: 5 },
//   { word: 'banana', length: 6 },
//   { word: 'kiwi', length: 4 }
// ]

// let res = Input.map((word,length)=>{
//     return {word:word,length:word.length}
// })
// console.log(res);
//------------------------------------------------

// let res = []
// for(let i=0;i<Input.length;i++){
//     res.push({word:Input[i],length:Input[i].length})
// }
// console.log(res);

//------------------------------------------------------------------------

// Input: [[1,2,3], [4,5], [6], [7,8]]

// const ab = [[1,2,3], [4,5], [6], [7,8]]

// Output:
// [
//   { row: [1,2,3], type: 'odd' },
//   { row: [4,5], type: 'even' },
//   { row: [6], type: 'odd' },
//   { row: [7,8], type: 'even' }
// ]

// let res = ab.map((row,type)=>{
//     return {row:row,type:row.length%2==0?"even":"odd"}
// })
// console.log(res);

//----------------------------------------------------------------------------------

// let res = []
// for(let i=0;i<ab.length;i++){
//      res.push({row:ab[i],type:ab[i].length%2==0?"even":"odd"})
// }
// console.log(res);

//-------------------------------------------------------------------------------------------

// Input: [[1, 2], [3, 4, 5], [6]]

// let ab = [[1, 2], [3, 4, 5], [6]]

// Output:
// [
//   { row: [1, 2], sum: 3 },
//   { row: [3, 4, 5], sum: 12 },
//   { row: [6], sum: 6 }
// ]

// let res = ab.map((row)=>{
//     let sum = row.reduce((acc,cur)=>acc+cur,0)
//     return {row:row,sum:sum}
// })
// console.log(res);
//-------------------------------------------------------------------------

// let res =[]
// for(let i=0;i<ab.length;i++){
//     let sum = ab[i].reduce((acc,cur)=>acc+cur,0)
//     res.push({row:ab[i],sum:sum})
// }
// console.log(res);

//--------------------------------------------------------------------------------------

// const products = [
//   { name: "Keyboard", price: 299 },
//   { name: "Monitor", price: 899 },
//   { name: "Mouse", price: 199 },
//   { name: "Chair", price: 1250 }
// ];
// let a = products.filter(product=>product.price<500)
// console.log(a);

// output=[ { name: 'Keyboard', price: 299 }, { name: 'Mouse', price: 199 } ]

//=================================================================================================

// const expenses = [
//   { item: "Groceries", amount: 1500 },
//   { item: "Electricity", amount: 2300 },
//   { item: "Internet", amount: 999 },
//   { item: "Subscription", amount: 499 }
// ];

// let sum = expenses.reduce((sum,expense)=>sum+expense.amount,0)
// console.log(sum);

//output=5298

//=================================================================================

//Input:
// arr1 = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 4, name: "Tom" },
// ];

// arr2 = [
//   { id: 2, age: 30 },
//   { id: 3, name: "Charlie" },
//   { id: 1, age: 22 },
//   { id: 4, name: "Tommy" },
// ];

// //Output:
// // [
// //   { id: 1, name: "Alice", age: 22 },
// //   { id: 2, name: "Bob", age: 30 },
// //   { id: 4, name: "Tommy" },
// //   { id: 3, name: "Charlie" }
// // // ]

// // let a = Object.values([...arr1,...arr2].reduce((acc,curr)=>))
// // console.log(a);
// let merged = Object.values(
//   [...arr1, ...arr2].reduce((acc, obj) => {
//     acc[obj.id] = { ...acc[obj.id], ...obj };
//     return acc;
//   }, {})
// );

//===================================================================================================

// let Input = "a2b3c4d6"
// let output = ''
 
// for(let i=0;i<Input.length;i+=2){
//    let char = Input[i]
//    let count = Number(Input[i+1])
   
//    for(let j=0;j<count;j++){
// 	output=output+char
//    }
   
   
// }
// console.log(output);
//========================================================================================================

//Find the second largest word from a sentence.

// let input = "i love coding  mm"

// let word = input.split(' ')

// let s =word.sort((a,b)=>b.length-a.length)


// let slargest = s[1]
// console.log(slargest);
//=================================================================================

//Remove duplicate characters from a string.


// let input ="aabc"

// let unique =""
// for(let i=0;i<input.length;i++){
// 	if(!unique.includes(input[i])){
// 		unique+=input[i]
// 	}
// }
// console.log(unique);

//==========================================================================================

// flat with out using flat method
// const array = [
//   { ab: [3, -5, -8, 40] },
//   { ab: [-68, 78, -23, -10] },
//   { ab: [49, 33, -12, 98] },
//   { ab: [-99, 22, -66] }
// ];

// let a = array.reduce((acc,cur)=>{
// 	return acc.concat(cur.ab)
// },[])
// console.log(a);
//====================================================================================

// let user = {name: "aysha",address: {city: "Kannur", pincode: 682001,contact: { phone: "9876543210"   }}};

//  let pin = user.address?.pincode
// console.log(pin);


// const array = [{a: 10, b: 20}, {c: 30, 4: 90}, {d: 88, e: 10}];

//=======================================================================================================================



// let array ={a:10,b:20}
// let a = Object.values(array)
// let b = a.reduce((sum,value)=>{
// 	return sum+=value
// })
// console.log(b);

//======================================================================================================

//sum

// const array = [{a: 10, b: 20}, {c: 30, 4: 90}, {d: 88, e: 10}];

// let arr = array.flatMap(Object.values)

// let aa = arr.reduce((sum,value)=>{
// 	return sum+=value
// })

// console.log(aa);
//=========================================================================================================

//number greater than 20

// const array = [{a: 10, b: 20}, {c: 30, 4: 90}, {d: 88, e: 10}];

// let arr = array.flatMap(Object.values)

// let aa = arr.filter((value)=>{
// 	if(value>20){
// 		return value
// 	}
// })
// console.log(aa);

//============================================================================================================

//first  nonrepeating element in a string

// let str = "hlloworhlwd"

// let string =  str.split('')

// console.log(string);

// for(let i=0;i<string.length;i++){
// 	let count = 0
// 	for(let j=0;j<string.length;j++){
// 		if(string[i]===string[j]){
// 			count++;
			
			
// 		}
		
// 	}
// 	if(count===1){
// 		console.log(string[i]);
// 			break
// 		}
// }

//===========================================================================================================

// let arr =[[2,5,8,9],[9,3,2,5],[2,5,9,9],[3,2,5,9]]

// let array = arr.flat()

// let count = 0 
// for(let i=0;i<array.length;i++){
// 	if(array[i]===9){
// 		count++
// 	}
// }
// console.log(count);

//==============================================================================================================


// let arr =[[2,5,8,9],[9,3,2,5],[2,5,9,9],[3,2,5,9]]

// function CountNumber(target){
// 	let count = 0
// 	let array = arr.flat()
// 	for(let i=0;i<array.length;i++){
// 		if(array[i]===target){
// 			count++
// 		}
		
// 	}
// 	return count
// }
// console.log(CountNumber(2));

//====================================================================================================================


const ab = [{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34},{a:[3,34,33],n:34}]

function flatten(arr){
    
}