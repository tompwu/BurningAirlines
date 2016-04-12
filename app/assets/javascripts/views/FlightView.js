var app = app || {};

app.FlightView = Backbone.View.extend({
    el: '#main',
    render: function() {
      var flightViewTemplate = $('#flightViewTemplate').html();
      var flightViewHTML = _.template( flightViewTemplate );
      this.$el.html( flightViewHTML(this.model.toJSON() ));
      plane_id = this.model.toJSON().plane_id;
      this.createSeats(plane_id);
    },
    createSeats: function(id) {
        var plane = app.planes.get(id);
        var columns = plane.attributes.columns;
        var rows = plane.attributes.rows;
        for (var x = 1; x <= rows; x++) {
            for (var y = 1; y <= columns; y++) {
                  var $seat = $('<div class="seat"></div>');
                  $seat.addClass('row' + x).addClass('column' + y).attr('id','seat' + x + y );
                  $('#seats').append($seat);
            }
            $('#seats').append('<br>');
      }

    }
});
