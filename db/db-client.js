const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

const dbConnect = () => {
  try {
    const database = client.db('to_do_list_web_app');
    const collection = database.collection('to_do');
    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const result = await collection.deleteOne(query);
    // console.log(result);
    return { collection, client };
  } catch(e){
    console.log(e)
  }
}

module.exports = {
  dbConnect
}