Router.configure({
    layoutTemplate: 'appLayout'
});


Router.route('brincadeiras', function() {
    this.subscribe("brincadeiras");
    this.render();
}, { name: 'brincadeiras' });

Router.route('mainpage', function() {
    this.subscribe("todasBrincadeiras");
    this.subscribe("todasPoesias");
    this.render();
}, { name: 'mainpage' });

Router.route('/', function() {
    if (!Meteor.userId()){
        this.redirect('welcome');
    }
    else if(Meteor.userId()) {
        this.redirect('mainpage');
    } else {
        this.layout('');
        this.render();
    }
}, { name: 'welcome' });