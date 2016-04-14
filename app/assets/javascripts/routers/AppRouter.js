var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'flights/:id': 'showFlight',
      'reservations/:id': 'showReservation'
    },
    index: function() {
      var appView = new app.AppView();
      appView.render();
    },
    showFlight: function(id) {
        var flight = app.flights.get(id);
        var flightView = new app.FlightView({model: flight});
        console.log(flight);
        flightView.render();
    },

    showReservation: function(id) {
        var reservation = app.reservations.get(id);
        var reservationView = new app.ReservationView({model: reservation});
        reservationView.render();
    }


});
