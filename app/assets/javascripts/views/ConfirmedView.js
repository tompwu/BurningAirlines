var app = app || {};

app.ConfirmedView = Backbone.View.extend({

el: '#main',

  render: function() {
    var confirmedViewTemplate = $('#confirmedViewTemplate').html();
    var confirmViewHTML = _.template( confirmedViewTemplate );

    this.$el.html( confirmViewHTML(this.model.toJSON() ));


    $("#flight-date").html(window.dateTime);
    $("#flight-number").html(window.flightId);
    $("#origin-result").html(window.originName);
    $("#destination-result").html(window.destinationName);
  }

});
