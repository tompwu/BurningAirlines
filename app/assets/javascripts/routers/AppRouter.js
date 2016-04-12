var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'flights/:id': 'show'
    },
    index: function() {
      var appView = new app.AppView();
      appView.render();
    },
    show: function(id) {
        var flight = app.flights.get(id);
        var flightView = new app.FlightView({model: flight});
        flightView.render();
    }

});
