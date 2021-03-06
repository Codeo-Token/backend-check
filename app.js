//Dependencies;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
  dotenv.config();
}
//PORT
const PORT = process.env.PORT;

//ROUTER
const mainRouter = require('./routes');
const errHandler = require('./middlewares/errHandler');

mongoose.connect(process.env.MONGOOSE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Welcome to mongoDB')
});

//APP-USE;
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
// require('./passport')(passport);


//Router that used;
app.use(mainRouter);

//Errhandler;
app.use(errHandler);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})