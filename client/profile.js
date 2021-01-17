import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './profile.html'
import './mySymptoms.html'

Template.profile.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    console.log("FOOOO")
    instance.counter.set(instance.counter.get() + 1);
  },
});
Template.profile.rendered = function() {
  if(!this._rendered) {
    this._rendered = true;
    console.log('Template onLoad');
  }
}

