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

		window.flightId = this.model.attributes.flight_id;
		window.flight = _.findWhere(app.flights.models, {id: flightId});
		window.originName = flight.attributes.origin.name;
		window.destinationName = flight.attributes.destination.name;
		window.dateTime = flight.attributes.date_time;
    window.dateTime = (dateTime.substr(0,10) + " " + dateTime.substr(11,5));

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
		app.router.navigate('/thankyou', true);

	},
	cancelBooking: function(event){
		event.stopPropagation();

		$.ajax('/reservations/' + this.model.get('id'), { method: 'delete' });
		app.reservations.remove({id: this.model.get('id')});

	  app.router.navigate('/', true);
	}

  });
