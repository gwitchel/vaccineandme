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
    // increment the counter when button is clicked
    console.log("FOOOO")
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

//https://www.kaggle.com/gpreda/pfizer-vaccine-tweets