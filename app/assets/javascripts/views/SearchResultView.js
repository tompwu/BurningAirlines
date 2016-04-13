var app = app || {};
//
app.SearchResultView = Backbone.View.extend({
    tagName: 'li',
//     events: {
//       'click': 'showFlight',
//       //////  click event
//       'click button' : 'createSearch',
//     },
//
render: function() {
  console.log("help me");
},
//     /////////////////////////  Function to populate list ////////////////////////////
//     render: function() {
//       var origin = this.model.attributes.origin.name;
//       var destination = this.model.attributes.destination.name;
//       var date = this.model.get('date_time');
//       this.$el.text( "Origin: " + origin + ", Destination: " + destination + ", Date: " + date );
//       this.$el.appendTo('#flight-list');
//     },
//     showFlight: function() {
//         console.log(this.model.get("id"));
//       app.router.navigate('flights/' + this.model.get("id"), true);
//     },
//
//
// ////////////////////////////////   Search Form ////////////////////////////////////////
//     el: "#searchForm",
//
//
// createSearch: function () {
//   var secret = new app.Secret();
//   var userContent = this.$el.find("textarea").val();
//   secret.set({
//     content: userContent
//   });
//   secret.save();
//   app.secrets.add( secret );
//   this.$el.find("textarea").val('').focus();
// },
//
// render: function() {
//   var secretInputViewTemplate = $("#secretInputViewTemplate").html();
//   this.$el.html( secretInputViewTemplate);
// }
});
