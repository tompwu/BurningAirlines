var app = app || {};

app.ReservationsView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'viewReservation'
	},

  el: '#main',

  render: function() {
    var reservationViewTemplate = $('#reservationViewTemplate').html();
		var flightViewHTML = _.template( reservationViewTemplate );
    this.$el.html(reservationViewTemplate);
	// },

    // View.collection.each(function(reservation) {
      // Give reservation plane_id
      reservation = reservation.toJSON();
      reservation.plane_id = view.collection.plane_id;
      // console.log(reservation.user_id);

      app.reservationView = new app.ReservationView({model: Reservation});
      app.reservationView.render( view.$el );
    },
		viewReservation: function(){
			console.log(app.reservationView);
		}
  });
