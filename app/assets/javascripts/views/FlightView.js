var app = app || {};

app.FlightView = Backbone.View.extend({

  events: {
    'click .seat': 'selectSeatOnClick',
    'click #confirm-seat-btn': 'confirmSeat'
  },
    el: '#main',
    render: function() {
      console.log("asas");
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
          alert ("That seat is unavailable. Please choose another seat.");
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
      if ($(".selected").length > 0) {
        var seat = $(".selected").eq(0).attr("id");
        var flight_id = this.model.attributes.id;

        // var userID = @current_user.id;

        if ($(".seat").hasClass("selected") === false){

          return;
        } else {
          window.reservation = new app.Reservation({user_id: app.current_user.id, seat: seat, flight_id: flight_id });
          reservation.save().done(function() {
              app.reservations.add( reservation );
              app.router.navigate('reservations/' + reservation.id, true);
          });
        }

      } else {
        alert("Please select a seat.");
      }


    }
  });
