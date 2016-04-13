var app = app || {};

app.ReservationsView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click': 'viewReservation'
	},

  el: '#main',

  render: function() {

    var reservationsViewTemplate = $('#reservationViewTemplate').html();
    this.$el.html(reservationsViewTemplate);

    app.usersListView = new app.UsersListView({collection: view.collection});
    app.usersListView.render();

    $('.seat').css('width', (app.planes.get(this.collection.plane_id).attributes.columns*10));

    view.collection.each(function(reservation) {
      // Give reservation plane_id too
      reservation = reservation.toJSON();
      reservation.plane_id = view.collection.plane_id;
      // console.log(reservation.user_id);

      app.reservationView = new app.ReservationView({model: reservation});
      app.reservationView.render( view.$el );
    });
  }

});
