const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to DB');
    }
    console.log('connected to mongo');
    const db = client.db('TodoApp');


    db.collection('Users').find({
        name: 'jake'
    }).toArray().then((docs) => {
        console.log('jakes');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to find jakes', err);
    });

    // db.collection('Todos').find({
    //     _id: new ObjectID('5be72b7cb2eccd6ff3e19481')
    //     // _id: '5be72b7cb2eccd6ff3e19481'
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to find todos', err);
    // });

    db.collection('Todos').insertOne({
        text: 'eat some good lunch',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert', err);
        } 
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'jake',
    //     age: 45,
    //     location: 'usa'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to add to users collection', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     // console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
    // })

    client.close();
});