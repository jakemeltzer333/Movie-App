const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());
app.use(
  session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());



const PORT = 3000 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('index');
});

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const movieRoutes = require('./routes/movie-routes');
app.use('/movies', movieRoutes);

app.get('*',(req,res)=>{
    res.status(400).json({
        message: 'Not found!',
      });
});
