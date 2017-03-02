angular.module('quotes')
  .factory('quoteFactory', quoteFact)

function quoteFact () {

  // var quotes = [
  //   {
  //     quote : "You miss 100% of the shots you don't take!",
  //     author : "Wayne Gretsky",
  //     rating : 3
  //   },
  //   {
  //     quote : "Shut the Fuck up Donny",
  //     author : "Walter Sobcheck",
  //     rating :5
  //   },
  //   {
  //     quote : "Do you Believe in Miricles",
  //     author : "Bob Costas",
  //     rating : 5
  //   },
  // ]
  //
  // localStorage.setItem('quotes', JSON.stringify(quotes))


  return {
    quotes : JSON.parse(localStorage.getItem('quotes')),
  }
}
