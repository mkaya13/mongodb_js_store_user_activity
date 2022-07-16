var mongodb = require("mongodb");

const client = mongodb.MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology: true}).then(connection=>{
    console.log("DB connection successful")
}).catch(error =>{
    console.log("Error in connectiong to DB")
});


connect_to();

async function connect_to() {

    const client = await mongodb.MongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology: true})
    const db = client.db("appdb");

    console.log("Connected to db")

    
    //const collections = await db.collections();
    //collections.forEach(c=>console.log(c.collectionName));

    //const all_data = db.collection("users");
    //const searchCursor = await all_data.find().toArray();
    // console.log(await searchCursor);

    // INSERT DATA
    
    const users = db.collection("users")
    const insertCursor = await users.insertMany([{name: "Emre", age : 27}, {name: "Yasar", age : 32}])
    console.log(await insertCursor)


    client.close()

   
}
