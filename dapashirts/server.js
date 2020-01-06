const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Require routes
require('./routes/department.routes.js')(app);
require('./routes/category.routes.js')(app);
require('./routes/product.routes.js')(app);
require('./routes/order.routes.js')(app);

app.listen(3500, () => {
    console.log("Server is listening on port 3500");
});