// const { exec } = require("child_process");

// exec("dir", (error, stdout, stderr) => {
//   if (error) {
//     console.log(`Error is:${error}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`STDOUT:${stderr}`);
//     return;
//   }
//   console.log(`Data is ${stdout}`);
// });

//

const {exec}  = require("child_process")
const { stderr } = require("process")

exec("dir",(error,stdout,stderr)=>{
    if(error){
        console.log(`Error is:${error}`);
        
    }
    if(stderr){
        console.log();
        
    }
    console.log(`Data is :${stdout}`);
    
})