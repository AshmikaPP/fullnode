// // //fs module reading

// // const fs = require('fs')
// // fs.readFile('text.txt','utf-8',(err,data)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log(data);
        
// //     }
// // })

// // fs module writing

// // const fs = require('fs')
// // const date = new Date().toLocaleString();
// // fs.writeFile('text.txt',date,'hello',(err)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log("success");
        
// //     }
// // })

// // fs module appending

// // const fs = require('fs');
// // fs.appendFile('text.txt','\nhi',(err)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log("Append");
        
// //     }
// // })

// // Sum

// // const fs = require('fs')
// // const num1 = 10;
// // const num2 = 20;
// // const num3 = 30;
// // const sum = num1+num2+num3;
// // const totalsum = `sum is:${sum}`;
// // fs.writeFile('text.txt',totalsum,(err)=>{
// //     if(err)
// // })

// // fs module reading

// // const fs = require('fs');
// // fs.readFile('text.txt','utf-8',(err,data)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log(data);
        
// //     }
// // })

// // fs module date

// // const fs = require('fs')
// // const date = new Date().toLocaleString()
// // fs.writeFile('text.txt',date,(err)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log("success");
        
// //     }
// // })

// //fs module appendfile

// // const fs = require('fs');
// // fs.appendFile('text.txt','\nashmika',(err)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log("Append");
        
// //     }
// // })

// //sum

// // const fs = require('fs');
// // const num1=10;
// // const num2 = 20;
// // const num3 = 30;
// // let sum = num1+num2+num3;
// // const totalsum=`sum is:${sum}`;
// // fs.writeFile('text.txt',totalsum,(err)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log(sum);
        
// //     }

// // const fs = require('fs')
// // let num1 = 40;
// // let num2 = 20;
// // let num3 = 10;
// // let sum = num1+num2+num3
// // let totalsum=`sum is:${sum}`
// // fs.writeFile('text.text',totalsum,(err)=>{
// //     if(err){
// //         console.log(err);
        
// //     }else{
// //         console.log("success");
        
// //     }
// // })


// // var fs = require ('fs')
// // const date = new Date().toLocaleString();
// // fs.writeFile('./file.txt',date,(err)=>{
// //   if(err){
// //     console.log(err);
// //  }
// //  console.log("success");
// // })

// //remove

// // const fs = require('fs');
// // fs.unlink('text.txt',(err)=>{
// //     if(err){
// //         console.log(err)
// //     }else{
// //         console.log("removed")
// //     }
// // })


// //server-http

// // const http = require('http')
// // const server = http.createServer((req,res)=>{
// //     res.write("hii")
// //     res.end()
// // })
// // server.listen(3000,()=>{
// //     console.log("server is running");
    
// // })

// //server-express

// // const express = require('express')
// // const app = express()
// // app.get('/',(req,res)=>{
// //     res.send("ashmika")
// // })
// // app.listen(3000,()=>{
// //     console.log("server is running")
// // })


// //middleware

// // const express = require("express");
// // const app = express()

// // function middleware(req,res,next){
// //     console.log("middleware");
// //     next()
// // }
// // // app.use(middleware)//-application level middleware-enth request vannalu work aavu 
// // app.get('/',middleware,(req,res)=>{ //router level middleware-specific routil maathre work aavu
// //     res.send("ashmika")
// // })
// // app.listen(3000,()=>{
// //     console.log("server is running");
    
// // })



// // const fs=require('fs')
// // const express =require('express')
// // const app=express()




// // app.get('/',(req,res)=>{
// //     res.send("Ashmika")
// // })

// // function middleware(req,res,next){
// // const value1=req.query.value1
// // const value2=req.query.value2
// // if(value1 && value2){
// //     const sum=(value1*2)+(value2*2)
// //     fs.writeFile('./sum.txt',`Sum:${sum}`,(err,data)=>{
// //         if(err){
// //             console.log(err)
// //             return res.status(400)
// //         }
// //         res.send(`Sum:${sum}`)
// //         console.log(data)
// //     })
// // }

// // next()
// // }

// // app.get('/sum',middleware,(req,res)=>{

// // })
// // app.listen(3000,()=>{
// //     console.log("server runnning http://localhost:3000")
// // })

// const {Worker}=require('worker_threads')

// console.log('start')

// const child=new Worker('./sum.js',{workerData:10})

// child.on('message',(data)=>{
//     console.log(data)
// })
// console.log('end')



// const fs = require('fs')
// const express = require('express')
// const app = express()
// app.get('/',(req,res)=>{
//     res.send("ashmika")
// })
// function middleware(req,res,next){
//     const value1 = req.query.value1
//     const value2 = req.query.value2
//     if(value1 && value2){
//         const sum = value1+value2
//     }
// }


// const {Worker} = require('worker_threads')

// console.log('start');


// const child =  new Worker('./sum.js',{workerData:10})

// child.on('message',(data)=>{
//     console.log(data);
    
// })
// console.log('end');

// const {Worker} = require('worker_threads')

// console.log("start")

// const child = new Worker('./sum.js',{workerData:10})

// child.on('message',(data)=>{
//     console.log(data);
    
// })
// console.log('end');



const express = require('express')

const app = express()

function middleIndex(req,res,next){
    console.log("middleware");
    next()
}