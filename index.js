const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();


//
app.use(cors());
app.use(express.json());

//db connect 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7l9zo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log('connect');



app.get('/', (req, res) => {
    res.send('Welcome warehouse management Server');
});

app.get('/test', (req, res) => {
    res.send('testing')
})

app.listen(port, () => {
    console.log('Warehouse management Listen Server is Running');
})