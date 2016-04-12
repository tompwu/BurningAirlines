var app = app || {};

app.Planes = Backbone.Collection.extend({
    url: '/planes',
    model: app.Plane
});
