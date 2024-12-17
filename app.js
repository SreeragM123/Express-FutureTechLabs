// const express=require('express');
// const app=express();

// app.get('/',(req,res)=>{
//     res.send('FutureTechLabs')
// });

// app.listen(5173,()=>{
//     console.log('server is running')
// });



// core modules

//http
//fs
//url
//path
//assert


// local module

//syntax:
//  exports.add=function(x,y){
//      return x+y
//  }

const calculator=require('./calc');
let x=50;
let y=25;
console.log('Sum:'+calculator.add(x,y))


const welcome=require('./welcome');
welcome.sayHello();
console.log(welcome.currDate);
console.log(welcome.address);





const express=require('express');
const app=express()
const port=5173;
app.get("/",(req,res)=>{
    res.status(200);
    res.send("Node Express Project");
})
app.listen(port,(error)=>{
    if(!error)
        console.log('server running successfully, PORT:'+port )
    else
    console.log('Error occured ,Server not working',error)
})