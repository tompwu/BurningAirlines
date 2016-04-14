var app = app || {};

app.User = Backbone.Collection.extend({
    url: '/users',
    model: app.User
});
