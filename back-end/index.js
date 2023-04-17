const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to retrieve data from MongoDB
app.get('/data', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017/mydb', (err, db) => {
    if (err) throw err;
    db.collection('mycollection').find({}).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});