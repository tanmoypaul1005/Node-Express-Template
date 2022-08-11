const express = require('express')
const app = express();
require('dotenv').config();
const DataBaseconnect = require("./config/DataBase");

const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());



//DataBase Connectd
DataBaseconnect()


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(5000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})