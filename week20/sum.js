// const {parentPort,workerData}=require('worker_threads')

// const num=workerData
// let sum=1
// for(let i=1;i<num;i++){
// sum+=i
// }
// parentPort.postMessage(sum)

const {parentPort,workerData} = require('worker_threads')

const num = workerData
let sum = 1
for(let i=1;i<num;i++){
    sum*=i
}

parentPort.postMessage(sum)