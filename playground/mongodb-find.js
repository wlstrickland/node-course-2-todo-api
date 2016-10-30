// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
      return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  db.collection('Users').find({name: "Bob"}).count().then((count) => {
    console.log('Users:' + count)
  }, (err) => {
    console.log('Unable to fetch records', err)
  })

  // db.close()
})