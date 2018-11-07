var express = require("express");
var app = express();
var parser = require('body-parser');

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

//Middleware is added...
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})
function createConnection(){
    var sql = require('mysql');
    var config = {
        server: 'localhost',
        database: 'CDACTraining',
        user: 'root',
        password: ''
    };
    var con = sql.createConnection(config);
    return con;
}
app.get('/', function(req, res){
    var con = createConnection();
    con.query('SELECT * FROM EMPTABLE', function(err, results, fields){
        res.send(JSON.stringify(results));
    })
})

app.get('/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    var con = createConnection();
    con.query('SELECT * FROM EMPTABLE WHERE EMPID = '+ id, function(err, results, fields){
        res.send(JSON.stringify(results));
    })
})

app.post('/', function(req, res){
    var data = req.body;//The data passed as body thro POST...
    console.log(data);
    //var data = JSON.parse(info);
    var con = createConnection();
    con.query("INSERT INTO EMPTABLE VALUES(" + data.empid + ",'" + data.empname + "','" + data.empaddress +"')", function(err, results, fields){
        if(err)
            console.log(err.message);else
        res.send("Data inserted to database");
    })
})
app.delete('/:id', function(req, res){
    var id = req.params.id;
    var con = createConnection();
    con.query('DELETE FROM EMPTABLE WHERE EMPID = ' + id, function(err, results, fields){
        if(err){
            res.send(err.message);
        }
        console.log(JSON.stringify(results));
        res.send("Employee is deleted");
    })
})
var server = app.listen(1234, function(){
    console.log("express is running");
})