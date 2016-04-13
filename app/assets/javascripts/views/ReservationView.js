var app = app || {};

app.ReservationView = Backbone.View.extend({
	el: '#main',
  render: function() {
    var reservationViewTemplate = $('#reservationViewTemplate').html();
		var reservationViewHTML = _.template( reservationViewTemplate );
    this.$el.html(reservationViewHTML(this.model.toJSON() ));
	// },

    // View.collection.each(function(reservation) {

      reservation = reservation.toJSON();

      // console.log(reservation.user_id);

      app.reservationView = new app.ReservationView({model: Reservation});
      app.reservationView.render( view.$el );
    },
		viewReservation: function(){
			console.log(app.reservationView);
		}
  });
