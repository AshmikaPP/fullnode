// const { spawn } = require("child_process");
// const ls = spawn("dir");

// ls.stdout.on("data", (data) => {
//   console.log(`Output:\n${data}`);
// });
// ls.stderr.on("data", (data) => {
//   console.log(`Error:\n${data}`);
// });
// ls.on("close", (code) => {
//   console.log(`Process exited with code ${code}`);
// });


const {spawn} = require("child_process")

const Is = spawn("dir")

Is.stdout.on("data",(data)=>{
    console.log(`output:\n${data}`);
    
})
Is.stderr.on("data",(data)=>{
    console.log(`error:\n${data}`);
    
})
Is.on("close",(code)=>{
    console.log(`process:${code}`);
    
})