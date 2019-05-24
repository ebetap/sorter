const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { createConnection } = mysql;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const connection = createConnection({
  host: 'db4free.net',
  user: 'betaebet',
  password: '69aHxfwAsAAJuRu',
  database: 'scrapedataset'
});

connection.connect(err => {
  if (err) console.log(err);
  else console.log('connected to database!');
});

app.post('/positive', (req, res) => {
  const { komentar } = req.body;
  const query = `INSERT INTO positive ("no","komentar") VALUES (${null},"testingaja")`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json('Saved!.');
  })
});

app.post('/negative', (req, res) => {

});

app.listen(process.env.PORT || 3000, () => console.log('Server Started...'));