var app = app || {};

app.AppView = Backbone.View.extend({
    el: '#main',
    render: function() {
      var appViewTemplate = $('#appViewTemplate').html();
      this.$el.html( appViewTemplate );
      app.flights.each( function(flight) {
          var flightListView = new app.FlightListView({model: flight});
          flightListView.render();
      });
  }
});
