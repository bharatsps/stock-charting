const express = require("express");
const bodyParser = require("body-parser");
require('./config/db')
require('dotenv').config();
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src/public"));

app.get("/", function (req, res) {
   res.sendStatus(200)
});

 app.use('/', require("./routes/route"))

 const PORT=process.env.PORT || 4000

app.listen(PORT, function () {
    console.log('Server started on 4000');
});


