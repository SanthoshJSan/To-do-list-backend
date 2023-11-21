
var { dbConnect } = require('../db-client.js');
var { collection, client} = dbConnect();

const fetchALLTodo = async(req, res) => {
    let documentList = [];
    const cursor = await collection.find({}, {projection: {_id: 0}}).toArray()
    .then(resultArray => {
      res.send(resultArray);
    }).catch(err=>{
      console.error('Error during find operation:', err);
      res.status(500).send('Internal Server Error');
    })
}

const insertTodo = (req, res)=>{
  // console.log(req.body)
  const body = req.body;
  if(body.length !== 0){
     const insertResult = collection.insertMany(body);
     insertResult.then((result)=>{
      console.log(result);
      res.send('success')
     }).catch((err)=>{
      res.status(400).send(err)
      console.log(err);
     })
  }
  else res.status(400).send('No body found');
}

const deleteTodo = (req, res)=>{
const body = req.body.taskName;
// console.log(body);
if(body !== ''){
     const deleteResult = collection.deleteMany({taskName: body});
     deleteResult.then((result)=>{
      console.log(result);
      res.send('success')
     }).catch((err)=>{
      res.status(400).send(err)
      console.log(err);
     })
  }
  else res.status(400).send('No body found');
}

module.exports = {
  fetchALLTodo,
  insertTodo,
  deleteTodo,
}