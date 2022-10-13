const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  let dbo = db.db("mydb");
  let myobj = { name: "Company Tpt", address: "Highway 137"};
  dbo.collection("customers").insertOne(myobj, function(err, res){
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
