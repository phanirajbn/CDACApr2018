//use npm install -g express for installing Express before U try this code
var express = require("express");
var app = express();//create an object...
//helper function to get an active connection to interact with the database
var parser = require('body-parser');
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})

function getConnection(){
    //use npm install -g mysql
    var sql = require('mysql');
    var config ={
        server:'localhost',
        database:'CDACTraining',
        user:'root',
        password:''
    };
    var con = sql.createConnection(config);
    return con;
}

app.get('/customers', function(req, res){
    var con = getConnection();
    con.query('SELECT * FROM CUSTOMER', function(err, results, fields){
        var data = JSON.stringify(results);
        res.send(data);
    })
})
//Query string is passed to get individual Ids...
app.get('/customers/:id', function(req, res){
    var id = req.params.id;//get the query string value.....
    console.log(id);
    var con = getConnection();
    var query = 'SELECT * FROM CUSTOMER WHERE CSTID = ' + id;
    con.query(query, function(err, results, fields){
        res.send(JSON.stringify(results[0]))
    })
})

app.post("/customers", function(req, res){
    var data = req.body;//Body parser will parse the JSON data and return the object to us...
    //console.log(data);
    var con = getConnection();
    con.query("insert into Customer(CstName, CstAddress) values('" + data.CstName + "','" + data.CstAddress + "')", function(err, result, fields){
        if(err)
            res.send(JSON.stringify(err));
        else
            res.send("Insertion succeeded")
    })
})

app.delete("/customers/:id", function(req, res){
    var con = getConnection();
    var id = req.params.id;
    //console.log("This id is getting deleted " + id)
    con.query("delete from customer where cstid = " + id, function (err, result, fields) {
        if (err)
            res.send(JSON.stringify(err));
        else
            res.send("Insertion succeeded")
    })
})
var server = app.listen(1234, function(){
    console.log("Server is running...");
});