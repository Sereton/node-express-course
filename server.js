const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'},
    {name:'Panchito'},
    {name:'Cheito'},
    {name:'Chuchito'},
    ]

app.listen(8000, () => {
    console.log('App listening on port 8000!');
});

app.get('/users', (req, res) => {
    console.log(req);
    res.json({
        success: true,
        message: 'succcessfully got DA USERS, Coollio',
        users: mockUserData,
        ruta: req.route.path

        
        
})});

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    res.json({
        success: true,
        message: "got one user",
        user: req.params.id
    })
});

app.post('/login', (req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";
     
     if(username===mockUsername && password == mockPassword) {
         res.json({
             success: true,
             message: "Password and username match",
             token: "Here is your encrypted token"

         })
     }
     else {
         res.json({
             success: false,
             message: "la cagaste"
         })
     }

    
});