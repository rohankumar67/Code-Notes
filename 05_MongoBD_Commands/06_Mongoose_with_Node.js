// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rohanKart', {useNewUrlParser: true}); // First one is database folder name with path

//  Create mongoose connection with making variables
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', function(){
    // We are succesfully connected
    console.log("Succesfully Connected");
})

// Create an schema (i.e. which type of data is stored in database)
const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = "Meow name is " + this.name;
    console.log(greeting);
  };

// Create a model/database from schema (i.e. it can used as a variable or object in futher part)
const Kitten = mongoose.model('Kitten', kittySchema);

// Insert data in database
const rohankitty = new Kitten({ name: 'rohankitty' });
const krishkitty = new Kitten({ name:"Krishkitty $"});
console.log(rohankitty.name);
rohankitty.speak();
rohankitty.save();  // Save function --> Save the above data in database
krishkitty.speak();
krishkitty.save();  // Save function --> Save the above data in database
