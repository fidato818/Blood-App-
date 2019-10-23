const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const port = process.env.PORT || 3001
const mongoose = require('./config/db')
const db = mongoose.connection;
var cors = require('cors');
app.use(cors());

    
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();

});
db.once('open', () => {
    console.log('Database Connected Successfully')
})
db.once("error", function (err) {
    console.log("Could not connect to mongo server!");
    console.log(err);
});


app.listen(port, () => {
    console.log(`server is listen on ${port}`)
})

app.use(express.json());


app.use('/', require('./routes/index'));