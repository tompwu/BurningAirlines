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

  // The function associated with the search click that
  // logs the values entered initially and prevents the
  // page from being refreshed.
  createSearch: function(event) {
    event.preventDefault();
    origin = originfield.value;
    destination = destinationfield.value;
    date = datefield.value;

// Below tests the search fields upon submit for similar db
// results and then renders the appropriate results accordingly.
    var search = _.filter(app.flights.models, function(flight) {
      if (origin !== '' && destination !== '' && date !== null) {
        return flight.attributes.origin.name === origin &&
        flight.attributes.destination.name === destination &&
        flight.attributes.date_time.includes(date);
      } else if (origin === '' && destination !== '') {
        return flight.attributes.destination.name === destination;
      } else if (origin !== '' && destination === '') {
        return flight.attributes.origin.name === origin;
      } else if (date !== null && destination === '' && origin === '') {
        return flight.attributes.date_time.includes(date);
      }
    });

    // Removes the previous list of results and renders the new
    // according the the above parameters.
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
