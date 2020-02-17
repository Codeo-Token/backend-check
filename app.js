const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const { PORT } = require("./config/variabelEnv");
const users = require('./routes/user'); 
const account = require('./routes/account.route');
const dotenv = require('dotenv');
const cors = require('cors');

if(process.env.NODE_ENV === 'development' && !process.env.NODE_ENV === 'development') {
  require(dotenv.config());
};

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  userFindAndModify: false
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Welcome to mongoDB')
});

const app = express();
const Port = PORT || 3000;

app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use('/users', users);

app.use('/account', account);
 
app.get('/', function(req, res) {
    res.send('hello');
});

app.listen(Port, () => {
    console.log(`Server is running on PORT ${Port}`);
  });
  