angular.module('quotes')
  .controller('HomeController', homeCtrl)

  homeCtrl.$inject = ['quoteFactory', '$scope'];

  function homeCtrl (quoteFactory, $scope) {
    var home = this;

    home.greeting = "How about these Quotes!";

    home.quotes = quoteFactory.quotes

    console.log(home.quotes)

// Add a Quotes
  home.addQuote = function(quote) {
    $('#addQuote').modal('show');
  }

  home.saveQuote = function () {
    $('#addQuote').modal('hide');

    quoteFactory.quotes.push(home.quote)

    quoteFactory.quotes.forEach(function (quote){
      delete quote.$$hashKey
    })

    localStorage.setItem('quotes', JSON.stringify(quoteFactory.quotes))

    home.quote = {};
  }

  home.deleteQuote = function (){
    quoteFactory.quotes.splice()
  }

  // rating


  }
