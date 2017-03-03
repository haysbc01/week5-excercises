var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/zoo");

var animalSchema = mongoose.Schema({
  name : String,
  diet : String,
});

var visitorSchema = mongoose.Schema({
  name : String,
  favoriteAnimals : Array,
});

var Animal = mongoose.model("Animal", animalSchema);
var Visitor = mongoose.model("Visitor", visitorSchema);

var animalArray = [{name : 'Caridnal', diet : 'bird seed'}, {name : 'Turtle', diet : 'Who the hell knows'}, {name : 'humans', diet : 'everything'}];
var visitorArray = [{name : 'Brian', favoriteAnimals : [ 'Turtle', 'giraffe', 'lizard']}, {name: 'Jimmy', favoriteAnimals : ['ducks', 'swans', 'squirrels']}]

// for (var i = 0; i < animalArray.length; i++){
//   new Animal(animalArray[i]).save( (err, doc)=>{
//     console.log("ERR", err);
//     console.log("DOC", doc);
//   })
// }
//
// for (var i = 0; i < visitorArray.length; i++){
//   new Visitor(visitorArray[i]).save( (err, doc)=>{
//     console.log("ERR", err);
//     console.log("DOC", doc);
//   })
// }

Visitor.find({favoriteAnimals : 'Turtle'}, (err, visitors)=>{
  // This callback function is the ONLY place where `doodles` reliably exists

  // doodle in doodles
  visitors.forEach(function(visitor){
    console.log(visitor.name, visitor.favoriteAnimals);
  });
});

Visitor.update({name: 'Brian'}, {$push: {favoriteAnimals: 'Wild Boar'}}, (err, visitors)=>{

})
