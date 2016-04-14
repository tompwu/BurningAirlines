var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',
  events: {
    'click #searchSubmit': 'createSearch'
  },
  render: function() {
    var appViewTemplate = $('#appViewTemplate').html();
    this.$el.html(appViewTemplate);
  },

  // The function associated with the search click that
  // logs the values entered initially and prevents the
  // page from being refreshed.
  createSearch: function(event) {
    event.preventDefault();
    origin = parseInt(originfield.value);
    destination = parseInt(destinationfield.value);
    date = datefield.value;

// Below tests the search fields upon submit for similar db
// results and then renders the appropriate results accordingly.
    var search = _.filter(app.flights.models, function(flight) {

      if (date !== null && origin !== 0 && destination !== 0) {
        return flight.attributes.origin.id === origin &&
        flight.attributes.destination.id === destination &&
        flight.attributes.date_time.includes(date);

      } else if (date === null && origin === 0 && destination !== 0) {
        return flight.attributes.destination.id === destination;

      } else if (date === null && origin !== 0 && destination === 0) {
        return flight.attributes.origin.id === origin;

      } else if (date !== null && destination === 0 && origin === 0) {
        return flight.attributes.date_time.includes(date);

      } else if (date !== null && destination === 0 && origin !== 0) {
        return flight.attributes.origin.id === origin && flight.attributes.date_time.includes(date);

      } else if (date !== null && destination !== 0 && origin === 0) {
        return flight.attributes.destination.id === destination && flight.attributes.date_time.includes(date);
      }
    });

    // Removes the previous list of results and renders the new
    // according the the above parameters.

    this.$el.find('li').remove();
    this.$el.find('ul').remove();

    var $headings = $('<ul id="flight-list" class="flight-ul"><li class="displaylist list-heading">Origin</li><li class="displaylist list-heading">Destination</li><li class="displaylist list-heading">Date</li><li class="displaylist list-heading">Seats Available</li></ul>');
    $('.flight-list-style').append($headings);
    for (var i = 0; i < search.length; i++) {
      var searchView = new app.FlightListView({
        model: search[i]
      });
      searchView.render();
    }
  }
});
