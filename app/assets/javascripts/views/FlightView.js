var app = app || {};
var checkForReservation;

app.FlightView = Backbone.View.extend({

  events: {
    'click .seat': 'selectSeatOnClick',
    'click #confirm-seat-btn': 'confirmSeat'
  },
    el: '#main',
    render: function() {
      checkForReservation = window.setInterval( function() {
              app.reservations.fetch();
          }, 50);
      var flightViewTemplate = $('#flightViewTemplate').html();
      var flightViewHTML = _.template( flightViewTemplate );
      this.$el.html( flightViewHTML(this.model.toJSON() ));
      plane_id = this.model.toJSON().plane_id;
      this.createSeats(plane_id);
      this.getReservations(this.model.attributes.id);
      var dateChange = this.model.get('date_time');
      var date = (dateChange.substr(0,10) + " " + dateChange.substr(11,5));
      $("#flight-date").html(date);

    },
    createSeats: function(id) {
        var plane = app.planes.get(id);
        var columns = plane.attributes.columns;
        var rows = plane.attributes.rows;
        var addAisle = function() {
          if (columns === '4') {
              $('.columnB').addClass('aisle-right');
          }else if (columns === '6') {
              $('.columnC').addClass('aisle-right');
          }else if (columns === '8') {
              $('.columnB').addClass('aisle-right');
              $('.columnF').addClass('aisle-right');
          }
        };
        var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
        for (var x = 1; x <= rows; x++) {
            for (var y = 1; y <= columns; y++) {
                  var $seat = $('<div class="seat unselected"></div>');
                  $seat.addClass('row' + x).addClass('column' + letters[y-1]).attr('id','seat' + x + letters[y-1] );
                  $seat.text(x + letters[y-1]);
                  $('#seats').append($seat);
            }
            addAisle();
            $('#seats').append('<br>');
            if (x === 7 || x == 14 || x == rows) {
                var leftLeftPos = $('#seat'+ x + 'A').offset().left;
                var topPos = $('#seat'+ x + 'A').offset().top;
                var rightLeftPos = $('#seat'+ x + letters[columns - 1] ).offset().left;
                var exitSource = 'http://www.firstsafetysigns.co.uk/WebRoot/BT2/Shops/Store2_002E_Shop1848/45F5/4CAA/50BE/B6A6/CDCB/AC10/3D2A/0034/300mmx150mm-exit-left.gif';

                $('#seats').append('<img id="exitLeft' + x + '" class="exit" src="' + exitSource + '">');
                $('#exitLeft' + x).offset({top: (topPos + 55), left: (leftLeftPos + 100) });
                $('#seats').append('<img id="exitRight' + x + '" class="exit" src="' + exitSource + '">');
                $('#exitRight' + x).offset({top: (topPos + 55), left: (rightLeftPos - 50) });
                $('#seats').append('<br>');
            }
      }

    },
    getReservations: function(flight_id) {
        var currentReservations = [];
        for (var i = 0; i < app.reservations.models.length; i++) {
              currentReservations.push(app.reservations.models[i].toJSON());
        }
        var reservationsThisFlight = _.where( currentReservations, {flight_id: flight_id});
        for (var j = 0; j < reservationsThisFlight.length; j++) {
              var flight = reservationsThisFlight[j] ;
              var seat = flight.seat;
              var user = _.findWhere(app.users.models, {id: flight.user_id });
              $('#' + seat).removeClass('unselected');
              $('#' + seat).addClass('reserved');
              $('#' + seat).text(user.attributes.name);
        }
    },
    selectSeatOnClick: function(e){
      e.stopImmediatePropagation();
      $('.seat').not('.reserved').addClass('unselected');
        if ($(e.currentTarget).hasClass('reserved')) {
          alert ("This seat has been booked. Please choose another seat.");
          return;
        }

        if ( app.reservations.findWhere({seat: e.currentTarget.id, flight_id: this.model.attributes.id })) {
            alert ("This seat is currently unavailable. Please choose another seat.");
            this.getReservations(this.model.attributes.id);
            return;
        }
        $('.seat').removeClass('selected');
        $(e.currentTarget).removeClass('unselected');
        $(e.currentTarget).addClass('selected');

        var seat = $(".selected").eq(0).attr("id");
        var flight_id = this.model.attributes.id;
        var reservations = app.reservations.where({user_id: app.current_user.id, confirmed: false});
        _.each(reservations, function (reservation) {
            reservation.destroy();
        });
        app.reservations.remove(reservations);
        var reservation = new app.Reservation({user_id: app.current_user.id, seat: seat, flight_id: flight_id });
        reservation.save().done(function() {
            app.reservations.add( reservation );

        });

    },
    confirmSeat: function() {
      if ($(".selected").length > 0) {
          clearInterval(checkForReservation);
          var flight_id = this.model.attributes.id;
          var seat = $(".selected").eq(0).attr("id");
          var reservation = app.reservations.where({user_id: app.current_user.id, seat: seat, flight_id: flight_id });
          app.router.navigate('reservations/' + reservation[0].id, true);

        // var userID = @current_user.id;

      } else {
          alert("Please select a seat.");
          return;
      }
  }
});
