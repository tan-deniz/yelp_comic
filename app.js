//===========================================
//IMPORTS
//===========================================

//NPM IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

//CONFIG IMPORTS
const config = require('./config');

//ROUTE IMPORTS
const comicRoutes = require('./routes/comics');
const commentRoutes = require('./routes/comments');
const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');

//MODEL IMPORTS
const Comic = require('./models/comic');
const Comment = require('./models/comment');
const User = require('./models/user');


//===========================================
//DEVELOPMENT
//===========================================

//Morgan
app.use(morgan('tiny'))

//Send to DB
//#####################################################
//const seed = require('./utils/seed');
//seed();
//#####################################################

//===========================================
//CONFIG
//===========================================

//BODY PARSER CONFIG
app.use(bodyParser.urlencoded({extended: true}));

//CONNECT TO DB
mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true});
// SERVER KAPATIP AÇMAK İÇİN
//mongoose.connect(config.db.connection, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});

//EXPRESS CONFIG
app.set("view engine", "ejs");
app.use(express.static('public'));

//EXPRESS SESION CONFIG

app.use(expressSession({
	secret: "vweilvwljbkdvsgdfcedvcuwevceucvbkcbdjsvcdbvjshdvjhsd",
	resave: false,
	saveUninitialized:false
}));



//METHOD OVERRIDE CONFIG
app.use(methodOverride('_method'));

//PASSPORT CONFİG
app.use(passport.initialize());
app.use(passport.session());	//allos persistent session
passport.serializeUser(User.serializeUser());	// what data should be storred in session 
passport.deserializeUser(User.deserializeUser());	// get data from stored session
passport.use(new LocalStrategy(User.authenticate()));	// use the local strategy

//CURRENT USER MİDDLEWARE CONFİG
app.use((req, res, next) => {
	res.locals.user = req.user;
	next();
})

// ROUTES CONFIG
app.use("/",mainRoutes);
app.use("/",authRoutes);
app.use("/comics", comicRoutes);
app.use("/comics/:id/comments",commentRoutes);


//===========================================
//LISTEN
//===========================================

app.listen(3000, () => {
	console.log("yelp_comic is running...");
});