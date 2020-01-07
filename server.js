const express = require('express');
const app = express();

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
        succcess: true,
        message: 'succcessfully got DA USERS, Coollio',
        users: mockUserData,
        ruta: req.route.path

        
        
})});