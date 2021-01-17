import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './profile.html'
import './mySymptoms.html'


Template.header.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.header.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.profile.events({
  'click button'(event, instance) {
    event.preventDefault();
    Meteor.users.update(this.userId, {
      $set: { 
        "height": $('#height').val(),
        "weight": $('#weight').val(),
        "age": $('#age').val(),
        "dateLV": $('#dateLV').val(),
        "race": $('#race').val(),
        "gender": $('#gender').val(),
      }
    });
  Router.go('/mySymptoms')
  },
});

Router.configure({
  layoutTemplate: 'main'
});
Router.route('/', {
  template: 'profile'
});
Router.route('/mySymptoms', {
  template: 'mySymptoms'
});
Router.route('/vaccine', {
  template: 'vaccine'
});