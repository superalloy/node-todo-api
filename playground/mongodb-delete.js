const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to DB');
    }
    console.log('connected to mongo');
    const db = client.db('TodoApp');

    //delete many
    // db.collection('Users').deleteMany({name: 'jake'}).then((results) => {
    //     console.log(results.result);
    // })

    // delete one
    // db.collection('Todos').deleteOne({text: 'eat some good lunch'}).then((results) => {
    //     console.log(results.result);
    // })

    //find one and delete
    // db.collection('Users').findOneAndDelete({_id: new ObjectID("5be72e84b2eccd6ff3e19531")}).then((results) => {
    //     console.log(results);
    // })

    //find one and update
    db.collection('Users').findOneAndUpdate({
        _id: ObjectID('5be734deb2eccd6ff3e1977f')
    }, {
            $set: { 
                name: 'jake'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })
    // client.close();
});