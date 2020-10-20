const express = require('express');
let users = require('./user.json')
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/users',(req,res)=>{
    fs.readFile('user.json',(err,data)=>{
        if(err)
        throw err;

        res.send(data);

    });
});

app.post('/api/user',(req,res)=>{
    let newUser = req.body;
    newUser = {...newUser,_id:users.length};
    res.send(newUser);
});

app.put('/api/user/:userId',(req,res)=>{
    const userId = req.params.userId;
    const updated = req.body;
    for(let i= 0; i<users.length;i++){
        if(userId == users[i]._id){
            users[i] = {...users[i],...updated};
        }
    }
    res.send(users);
});

app.delete('/api/user/:userId',(req,res)=>{
    let userId = req.params.userId;
    users = users.filter(user => user._id != userId);
    res.send(users);
});

app.use('/api/user/:response',(req,res,next)=>{
    const response = req.params.response;
    if(!isNaN(response)){
        fs.readFile('user.json',(err,data)=>{
            if(err)
                throw err;
            data = JSON.parse(data);
            const foundUser = data.find( user => user._id == response);
            res.send(foundUser);
        })
    }
    else
        next();
},(req,res,next)=>{
    const response = req.params.response;
    if(isNaN(response)){
        fs.readFile('user.json',(err,data)=>{
            if(err)
                throw err;
            data = JSON.parse(data);
            const foundUser = data.find( user => user.name == response);
            res.send(foundUser);
        })
    }
        
})

app.get('/api/user/:response',(req,res)=>{
    
});

app.listen(3000,console.log('listning to port 3000'));