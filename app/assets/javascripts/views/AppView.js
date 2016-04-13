var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',
  events: {
    'click #searchSubmit': 'createSearch'
  },
  render: function() {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);
    app.flights.each(function(flight) {
      var flightListView = new app.FlightListView({
        model: flight
      });
      flightListView.render();
    });
  },
  createSearch: function(event) {
    event.preventDefault();
    origin = originfield.value;
    destination = destinationfield.value;
    date = datefield.value;
    // var SearchResultView = new app.SearchResultView();
    // SearchResultView.render();

    var search = _.filter( app.flights.models, function(flight) {
        if (origin !== '' && destination !== '') {
            return flight.attributes.origin.name === origin && flight.attributes.destination.name === destination;
        } else if (origin === '' && destination !== '') {
            return flight.attributes.destination.name === destination;
        } else if (origin !== '' && destination === '') {
            return flight.attributes.origin.name === origin;
        }
    });
    $('li').remove();
    for (var i = 0; i < search.length; i++) {
      var searchView = new app.FlightListView({
          model: search[i]
        });
        searchView.render();
    }
    // var search = app.flights.models.filter(function(flight) {
    //   return flight.get("origin").name === origin && flight.get("destination").name === destination;
    // });
    // for (var i = 0; i < search.length; i++) {
    //     var searchModel = search[i];
    //     var flightListView = new app.FlightListView({
    //       model: searchModel
    //     });
    //     flightListView.render();
    //   }

  }
  });




// app.flights.filter(function (flight) {
//   return flight.get("origin").name === "Los Angeles" && flight.get("destination").name === "Sydney";
// });



// var date = "2016-05-13T08:30:00.000Z";
// var userDate = "2016-05-13"
// date.includes( userDate );
// ===>true
