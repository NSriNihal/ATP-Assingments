//Create a mini express app(Seprate route)

import exp from 'express'
export const userApp = exp.Router()

let users = []

//create USER API(REST API)(Reprentational State Transfer API)

//structure of a route
//app.METHOD(path,request handler) (method: get,post,put,delete)(in rest api path-utl should be a noun)

  //Route to handle get request of a client(http://localhost:3000/users)
  userApp.get('/users',(req,res)=>{   //req : request obj ,res: response object
    //read all users and send response
    res.json({message:"all data",payload:users})
  })



  userApp.get('/users/:id',(req,res)=>{   //req : request obj ,res: response object
    //read all users and send response
    let idOfUrl = Number(req.params.id)
    let index = users.findIndex((userObj)=>userObj.id === idOfUrl)
    if(index === -1){
      return res.json({message:"user not found"})
    }
    res.json({message:" data",payload:users[index]})
  })





  //Route to handle POST request of a client
  userApp.put('/users',(req,res)=>{
    //get modified user from client {}
    let modifiedUser = req.body
    //get index of exesting user in users array
    let index = users.findIndex(userObj =>userObj.id ===modifiedUser.id )
    if(index === -1){
      return res.json({message:"user not found"})
    }
    //update user with index
    users.splice(index,1,modifiedUser)
    //send response
    res.json("Updated")

  })
  //Route to handle PUT request of a client
  userApp.post('/users',(req,res)=>{
    //get new user from client
    const newUser = req.body;
    users.push(newUser)
    res.json({message:"user Created"})
    //  and push user into users
    //send res
  })
  //Route to handle DELETE request of a client
  userApp.delete('/users/:id',(req,res)=>{
    //get id of user from url parameter
    let idOfUrl = Number(req.params.id) //{id : 1}
    // console.log(req.params)
    //find index of user
    let index = users.findIndex((userObj)=>userObj.id === idOfUrl)
    //delete user by index
    if(index === -1){
      return res.json({message:"User not found"})
    }
    users.splice(index,1)
    res.json({message:"Deleted"})
  })
