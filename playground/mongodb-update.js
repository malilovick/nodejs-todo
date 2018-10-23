//const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  

//  db.collection('Todos').findOneAndUpdate({
    
//     _id:new ObjectID('5bce8a72765567b259b7b9fe')
//  },{
//     $set:{
//       text:"New Update Again",
//       completed:false
//     }
//   },{
//     returnOriginal:false}).then((result)=>{
//       console.log(result);
//   } );
//   db.close();
// });

db.collection('Users').findOneAndUpdate({
    
  _id:new ObjectID('5bcb752974318f03fc2e69e7')
},{
  $set:{
    "name" : "Marcosssssss",
  },
  $inc:{
    "age" :20,
  }
},{
  returnOriginal:false}).then((result)=>{
    console.log(result);
} );


db.close();
});


