var app = app || {};

app.Airports = Backbone.Collection.extend({
    url: '/airports',
    model: app.Airport
});
