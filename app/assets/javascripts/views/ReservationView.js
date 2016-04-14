var app = app || {};

app.ReservationView = Backbone.View.extend({
	events: {
		'click #confirm-reservation': 'confirmBooking',
		'click #cancel-reservation': 'cancelBooking'
	},

	el: '#main',

  render: function() {
    var reservationViewTemplate = $('#reservationViewTemplate').html();
		var reservationViewHTML = _.template( reservationViewTemplate );
    this.$el.html(reservationViewHTML(this.model.toJSON() ));

		var flightId = this.model.attributes.flight_id;
		var flight = _.findWhere(app.flights.models, {id: flightId});
		var originName = flight.attributes.origin.name;
		var destinationName = flight.attributes.destination.name;
		var dateTime = flight.attributes.date_time;
    dateTime = (dateTime.substr(0,10) + " " + dateTime.substr(11,5));

		// Flight.find_by_id(flightId).origin.name
		$("#flight-date").html(dateTime);
		$("#flight-number").html(flightId);
		$("#origin-result").html(originName);
		$("#destination-result").html(destinationName);
		// var destination = Flight.find_by_id(flightId).destination.name
		// var userId = this.model.attributes.user_id
		// var userName = Users.find_by_id(userId)

	},

	confirmBooking: function(e){
		e.stopImmediatePropagation();
		app.router.navigate('/', true);
		// $(window.reservation).attr("confirmed", true);
				// debugger
	},
	cancelBooking: function(event){
		event.stopPropagation();

		// $(window.reservation).attr("confirmed", false);
		debugger;
		$.ajax('/reservations/' + this.model.get('id'), { method: 'delete' });
		app.reservations.remove({id: this.model.get('id')});
		// console.log(window.reservation);
	  app.router.navigate('/', true);
	}

  });
