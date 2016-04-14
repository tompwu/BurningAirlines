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
    this.$el.append("<ul class='flight-ul flight-list-data' id='flight-" + flight_id + "'><li class='displaylist'>" + origin + "</li><li class='displaylist'>" + destination + "</li><li class='displaylist'>" + date + "</li><li class='displaylist' id='seat-avail-" + flight_id + "'></li></ul>");
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
  },
  showFlight: function() {
    app.router.navigate('flights/' + this.model.get("id"), true);
  }
});
