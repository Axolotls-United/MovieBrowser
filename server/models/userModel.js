const mongoose = require('mongoose');

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

const userSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
    favoriteMovies: Array,
    watchList: Array
});

const User = mongoose.model('user', userSchema);

module.exports = {
    User,
}