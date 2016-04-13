var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#main',
    events: {
      'click button' : 'createSearch'
    },
    render: function() {
      var appViewTemplate = $('#appViewTemplate').html();
      this.$el.html( appViewTemplate );
      app.flights.each( function(flight) {
          var flightListView = new app.FlightListView({model: flight});
          flightListView.render();
      });
  },
  createSearch: function(event) {
    event.preventDefault();
    origin = originfield.value;
    destination = destinationfield.value;
    date = datefield.value;
    console.log(origin + " " + destination + " " + date);
    var SearchResultView = new app.SearchResultView();
    SearchResultView.render();

  }
});
