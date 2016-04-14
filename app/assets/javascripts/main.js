var app = app || {};

$(document).ready(function() {

    app.flights = new app.Flights();
    app.flights.fetch();

    app.planes = new app.Planes();
    app.planes.fetch();

    app.airports = new app.Airports();
    app.airports.fetch();

    app.users = new app.Users();
    app.users.fetch();

    app.reservations = new app.Reservations();
    app.reservations.fetch();

    // window.setInterval( function() {
    //     app.secrets.fetch();
    // }, 4000);

    app.router = new app.AppRouter();
    Backbone.history.start();


});
