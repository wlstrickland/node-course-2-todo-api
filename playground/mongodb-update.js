// const MongoClient = require('mongodb').MongoClient
const {
    MongoClient,
    ObjectID
} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // ObjectId("5816187bfcacdd7239cf875e")
    //   db.collection('Todos').findOneAndUpdate({
    //       _id: new ObjectID('5816187bfcacdd7239cf875e')
    //   }, {
    //       $set: {
    //           completed: true
    //       }
    //   }, {
    //       returnOriginal: false
    //   }).then((result) => {
    //       console.log(result)
    //   })
    // ObjectID = ObjectId("5816279afcacdd7239cf875f")
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5816279afcacdd7239cf875f')
    }, {
        $set: {name: "Lee"},
        $inc: {age: -2}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // db.close()
})