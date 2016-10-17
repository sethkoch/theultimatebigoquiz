var mysql      = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 4568;
app.listen(port);

// app.use(express.static('client/index.html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'poo',
  database : 'sethsfullstacktherealone'
});


  connection.connect(function(err){
  if(err){
    console.log('Database connection error');
  }
  else{
    console.log('Database connection successful');
  }
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

app.post('/datain', function (req, res) {
  var data = req.body
  console.log(data);
  var mess = {message: data};
  connection.query('insert into messageToUniverse set ?', mess , function(err, res) {
  if (err) throw err;

  console.log('successful insertion');

});

  res.send('thanks, now here stuck you are!');
});

app.get('/retrieve', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  var infoToSend;
  connection.query('SELECT * FROM messageToUniverse',function(err, records){
  if(err) throw err;
  infoToSend = JSON.stringify(records);
  res.send(infoToSend);
  console.log('You retrieved it!');

});
})


