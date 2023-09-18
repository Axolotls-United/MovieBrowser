const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const sessionSchema = new Schema({
  cookieId: { type: String, unique: true },
  createdAt: {type: Date, expires: 60, default: Date.now }
});

//create model labeled User using the created schema, under user collection
const Session = mongoose.model('session', sessionSchema);

//export user schema
module.exports = {
    Session,
}