var app = app || {};

app.FlightListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'showFlight'
  },
  render: function() {
    var origin = this.model.attributes.origin.name;
    var destination = this.model.attributes.destination.name;

    var dateChange = this.model.get('date_time');
    var date = (dateChange.substr(0,10) + " " + dateChange.substr(11,5));
    this.$el.text("Origin: " + origin + ", Destination: " + destination + ", Date: " + date);
    this.$el.appendTo('#flight-list');
  },
  showFlight: function() {
    console.log(this.model.get("id"));
    app.router.navigate('flights/' + this.model.get("id"), true);
  }
});
