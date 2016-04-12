var app = app || {};

$(document).ready(function() {

    app.flights = new app.Flights();
    app.flights.fetch();

    app.planes = new app.Planes();
    app.planes.fetch();

    // window.setInterval( function() {
    //     app.secrets.fetch();
    // }, 4000);

    app.router = new app.AppRouter();
    Backbone.history.start();


});
