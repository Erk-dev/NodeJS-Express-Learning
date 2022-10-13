const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db("mydb");
    dbo.createCollection("customers", (err, db) => {
        if (err) throw err;
        console.log("Collection created");
        db.close();
    });
});