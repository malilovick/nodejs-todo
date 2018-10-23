//const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Users').deleteMany({
//     name: "José"
//   }).then((result)=>{
//       console.log(result);
// });

// db.collection('Todos').deleteOne({
//   text: "3"
// }).then((result)=>{
//     console.log(result);
// });

  
//   db.close();
// });

// db.collection('Todos').findOneAndDelete({
//   completed: false
// }).then((result)=>{
//     console.log(result);
// });

  
  db.close();
});