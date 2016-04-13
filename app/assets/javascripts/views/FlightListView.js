var app = app || {};

app.FlightListView = Backbone.View.extend({
    tagName: 'li',
    events: {
      'click': 'showFlight',
    },
    render: function() {
      var origin = this.model.attributes.origin.name;
      var destination = this.model.attributes.destination.name;
      var date = this.model.get('date_time');
      this.$el.text( "Origin: " + origin + ", Destination: " + destination + ", Date: " + date );
      this.$el.appendTo('#flight-list');
    },
    showFlight: function() {
        console.log(this.model.get("id"));
      app.router.navigate('flights/' + this.model.get("id"), true);
    }
});
