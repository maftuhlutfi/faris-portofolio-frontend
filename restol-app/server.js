// import
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const passport = require("passport");
require('./config/passport-auth')(passport)
const cors = require("cors");

const routes = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(routes)

app.listen(4000, () => {
    console.log('Server started at port 4000.')
})