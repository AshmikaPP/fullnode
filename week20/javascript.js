//callback

const { json } = require("express")

// function hello(hi){
//    hi()
// }
// function hi(){
//     console.log("ashmika");
    
// }
// hello(hi)

//-----------------------------------------------------------------------------------------------

//promise

// let pro = new Promise((resolve,reject)=>{
//     let x = 10;
//     if(x==10){
//         resolve("success")
//     }else{
//         reject("error")
//     }
// })
// pro.then((result)=>{
//     console.log(result);
    
// }).catch((res)=>{
//     console.log(res);
    
// })

//-----------------------------------------------------------------------------------------------------

//call

// hello={
//     name:"ashmika",
//     fn:function(age,roll){
//     console.log(this.name+age+roll);
//     }
// }
// hi={
//    name:"aneena"
// }
// hello.fn.call(hi,22,30)

//apply

// hello={
//     name:"ashmika",
//     fn:function(age,roll){
//         console.log(this.name+age+roll);
        
//     }
// }
// hi={
//     name:"aneena",

// }
// hello.fn.apply(hi,[10,20])

//bind

// hello={
//     name:"ashmika",
//     fn:function(age,roll){
//         console.log(this.name+age+roll);
        
//     }
// }
// hi={
//     name:"aneena"
// }
// let a = hello.fn.bind(hi,20,30)
// a()
// a()

//-----------------------------------------------------------------------

//promise-even or odd

// const pro = new Promise((resolve,reject)=>{
//     let x=11
//     if(x%2==0){
//         resolve("even")
//     }else{
//         reject("odd")
//     }
// })
// pro.then((result)=>{
//     console.log(result);
    
// }).catch((res)=>{
//     console.log(res);
    
// })

//promise- sum

// const pro = new Promise((resolve,reject)=>{
//     let x = 10
//     let y = 20
//     resolve(x+y)
// })
// pro.then((result)=>{
//     console.log(result);
    
// })

//-----------------------------------------------------------------------------------------

//spread operators

// let a = [1,2,3,4]
// let b = [...a,5,6]
// console.log(b);

//rest

// let a = [1,2,3,4,5,6]
// let[first,second,...rest]= a
// console.log(first);
// console.log(second);
// console.log(rest);

//reduce

//-sum
// let arr = [1,2,3,4,5]

// let a = arr.reduce((sum,value)=>{
//     return sum+=value
// })
// console.log(a)

//-even numbers unsing reduce

// let arr = [1,2,3,4,5]

// let a = arr.reduce((cur,value)=>{
//     if(value%2==0){
//        cur.push(value)
//     }
//     return cur
// },[])
// console.log(a)

//-largest value using reduce

// let arr = [1,6,2,5,3,4]
// let a = arr.reduce((cur,value)=>{
//     if(cur>value){
//         return cur
//     }else{
//         return value
//     }
// })
// console.log(a)

//-secondLargest using reduce

// let arr = [1,5,2,4,3]

// let a = arr.reduce((acc,cur)=>{
//     let [first,second] = acc
//     if(cur>first){
//       acc = [cur,first]
//     }else if(cur!=first && cur>second){
//       acc = [first,cur]
//     }
//     return acc
// },[-Infinity,-Infinity])
// console.log(a[1])



// let arr = [1,2,4,5,4,3,6,8,2]

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
// console.log(duplicate);


// const orginal = {
//     name:"ashmika",
//     address:{
//         place:'tly',
//         pin:'673313'
//     }
// }
// const copy = JSON.parse(JSON.stringify(orginal))
// copy.name="aneena"
// copy.address.place='olavilam'
// copy.address.pin='555555'
// console.log(orginal);
// console.log(copy);


// function curryAdd(x){
//     return function(y){
//         return x+y
//     }
// }
// let add = curryAdd(3)
// console.log(add(4));


function x(){
    let a = 10
    function y(){
        console.log(a);
        
    }
    y()
}
x()