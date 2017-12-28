// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var kittySchema = mongoose.Schema({
    name: String,
    createdAt: { type: Date, expires: 60, default: Date.now }
});
var Kitten = mongoose.model('Kitten', kittySchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
  
  var fluffy = new Kitten({ name: 'fluffy' });
  
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    
  });

});