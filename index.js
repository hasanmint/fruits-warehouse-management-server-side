const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express();


//
app.use(cors());
app.use(express.json());

//db connect 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7l9zo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log('connect');




async function run() {
    try {
        const collection = client.db("fruitsWarehouse").collection("inventory");
        await client.connect();

        //Find Data
        app.get('/inventory', async (req, res) => {
            const query = {};
            const cursor = collection.find(query);
            const inventories  = await cursor.toArray();
            res.send(inventories);
        })
    } finally {
        
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Welcome warehouse management Server');
});

app.get('/demo', (req, res) => {
    res.send('Demo Data')
})

app.listen(port, () => {
    console.log('Warehouse management Listen Server is Running');
})