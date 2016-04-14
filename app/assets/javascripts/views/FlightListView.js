var app = app || {};

app.FlightListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showFlight'
  },
  render: function() {
    var origin = this.model.attributes.origin.name;
    var destination = this.model.attributes.destination.name;
    var dateChange = this.model.get('date_time');
    var date = (dateChange.substr(0,10) + " " + dateChange.substr(11,5));
    var plane_id = this.model.attributes.plane_id;
    var flight_id = this.model.id;

    this.$el.text("Origin: " + origin + ", Destination: " + destination + ", Date: " + date + " Seats Available:");
    this.$el.append('<span id="seat-avail-' + flight_id + '"></span>');
    this.$el.appendTo('#flight-list');
    app.planes.fetch().done(function(){
      app.reservations.fetch().done(function(){
          var numReservations = 0;
          for (var i = 0; i < app.reservations.models.length; i++) {
                if (app.reservations.models[i].attributes.flight_id === flight_id) {
                    numReservations += 1;
                }
          }
          var thisPlane = _.findWhere(app.planes.models, {id:plane_id });
          var numberOfSeats = parseInt(thisPlane.attributes.columns) * parseInt(thisPlane.attributes.rows);
          var availableSeats = numberOfSeats - numReservations;
          $('#seat-avail-' + flight_id).text(availableSeats + '/' + numberOfSeats );
      });
    });
>>>>>>> 9538128270be328aedad1bc5fce116bb6b5854e2
  },
  showFlight: function() {
    app.router.navigate('flights/' + this.model.get("id"), true);
  }
});
