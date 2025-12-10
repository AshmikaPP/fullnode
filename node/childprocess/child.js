// process.on("message", (msg) => {
//   console.log("Message from parent:", msg);
//   process.send({ replay: "Hi parent!" });
// });

process.on("message",(msg=>{
    console.log("message from parent",msg);
    process.send({reply:"Hi parent"})
}))