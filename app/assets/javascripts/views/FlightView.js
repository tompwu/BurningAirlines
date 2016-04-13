var app = app || {};

app.FlightView = Backbone.View.extend({

  events: {
    'click .seat': 'selectSeatOnClick',
    'click #confirm-seat-btn': 'confirmSeat'
  },
    el: '#main',
    render: function() {
      var flightViewTemplate = $('#flightViewTemplate').html();
      var flightViewHTML = _.template( flightViewTemplate );
      this.$el.html( flightViewHTML(this.model.toJSON() ));
      plane_id = this.model.toJSON().plane_id;
      this.createSeats(plane_id);
      this.getReservations(this.model.attributes.id);
    },
    createSeats: function(id) {
        var plane = app.planes.get(id);
        var columns = plane.attributes.columns;
        var rows = plane.attributes.rows;
        var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
        for (var x = 1; x <= rows; x++) {
            for (var y = 1; y <= columns; y++) {
                  var $seat = $('<div class="seat"></div>');
                  $seat.addClass('row' + x).addClass('column' + letters[y-1]).attr('id','seat' + x + letters[y-1] );
                  $('#seats').append($seat);
            }
            $('#seats').append('<br>');
      }
    },
    getReservations: function(flight_id) {
        var currentReservations = [];
        for (var i = 0; i < app.reservations.models.length; i++) {
              currentReservations.push(app.reservations.models[i].toJSON());
        }
        var reservationsThisFlight = _.where( currentReservations, {flight_id: flight_id});
        for (var j = 0; j < reservationsThisFlight.length; j++) {
              var seat = reservationsThisFlight[j].seat;
              $('#' + seat).addClass('reserved');
        }
    },
    selectSeatOnClick: function(e){
      e.stopImmediatePropagation();
      // $("#seats").children().on("click", function(){
        if ($(e.currentTarget).hasClass('reserved')) {
          return;
        }
        $('.seat').removeClass('selected');
      //   // if ($(this).css("background-color", "blue")){
      //   //   alert("This seat has already been taken. Please choose an available seat.")
      //   // } else {
        $(e.currentTarget).addClass('selected');
      //   // }
      // });
    },
    confirmSeat: function() {
        var seat = document.getElementsByClassName('selected')[0].id;
        var flight_id = this.model.attributes.id;

        // var userID = @current_user.id;

        var reservation = new app.Reservation({user_id: app.current_user.id, seat: seat, flight_id: flight_id });
        reservation.save();
        // app.router.navigate('reservations/' + this.model.get("id"), true);

    }

  });
