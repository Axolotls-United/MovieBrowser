//mongoose
const mongoose = require('mongoose');

//this is my database ~Simon C~ if you want to be whitelisted DM me or you can make your own database and replace the URI 
const MONGO_URI = 'mongodb+srv://axolotlDB60:VKJ1qdlzLHrYKR0g@cluster0.atoyrvu.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'soloprojectdb'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


const Schema = mongoose.Schema;

//create schema for Users
//Username must not be a duplicate from previous users
//favoriteMovies and watchList will default to empty arrays and do not need to be passed in when creating
const userSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
    favoriteMovies: {type: Array, default: []},
    watchList: {type: Array, default: []}
});

//create model labeled User using the created schema, under user collection
const User = mongoose.model('user', userSchema);

//export user schema
module.exports = {
    User,
}