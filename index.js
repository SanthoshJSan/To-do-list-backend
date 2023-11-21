var express = require('express');
var cors = require('cors');
var app = express();

var { fetchALLTodo, insertTodo, deleteTodo } = require('./db/db-operations/to-do-collection.js')

let jsonParser = express.json();
let stringParser = express.text();

const closeDb = ()=>{
  client.close();
}

app.use(cors());
app.use(stringParser)
app.get('/fetch-todo', fetchALLTodo );


app.post('/save', jsonParser, insertTodo);

app.post('/delete-todo', jsonParser, deleteTodo);

app.listen(7000, function () {
  console.log('app listening on port 7000!');
});