// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // Creating 5 users

  // db.collection('Users').insertOne(
  //   {
  //     name: 'Any',
  //     age: 25
  //   }, (err, result) => {
  //     if (err){
  //       return console.log('Unable to insert user', err);
  //     }
  //     console.log(result.ops);
  //   });

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').deleteMany({name: 'Lio'}).then((result) => {
    console.log(result);
  })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5be3f6fd7d10950f2fdd458d')
  }).then((result) => {
    console.log(result);
  })

  client.close();
});
