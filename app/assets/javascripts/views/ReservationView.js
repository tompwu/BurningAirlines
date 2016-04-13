var app = app || {};

app.ReservationView = Backbone.View.extend({
	events: {
		'click #confirm-reservation': 'confirmBooking'
	},

	el: '#main',

  render: function() {
    var reservationViewTemplate = $('#reservationViewTemplate').html();
		var reservationViewHTML = _.template( reservationViewTemplate );
    this.$el.html(reservationViewHTML(this.model.toJSON() ));
<<<<<<< HEAD
=======

		var flightId = this.model.attributes.flight_id;
		var origin = _.findWhere(app.flights.models, {id: flightId});
		var originName = origin.attributes.origin.name;
		var destination = _.findWhere(app.flights.models, {id: flightId});
		var destinationName = destination.attributes.destination.name;
		// Flight.find_by_id(flightId).origin.name

		$("#flightNumber").html(flightId);
		$("#origin-result").html(originName);
		$("#destination-result").html(destinationName);
		// var destination = Flight.find_by_id(flightId).destination.name
		// var userId = this.model.attributes.user_id
		// var userName = Users.find_by_id(userId)

>>>>>>> f56caf7be97247266d7862e3a7822153f142ddb7
		}
		
  });
