import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import {Accounts} from 'meteor/accounts-base';


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
})

Template.mainNav.events({
  'click #bookings' : (event) => {
    Template.bookingsView.isVisible.set(true)
    Session.set('template', event.currentTarget.getAttribute('data-template'))
  }

})


Template.bookingsView.helpers({
  // 'isVisible' : () => this.bookingsShow
})

Template.registerHelper('userName', function (userId) {
  if (userId) {
    const user = Meteor.users.findOne({_id: userId});
    return user.username;
  } else {
    return "No UserId"
  }
});

Template.registerHelper('instance', function () {

});


Template.bookingsView.onCreated(function () {
  console.log('bookings created')
  Template.instance().isVisible = new ReactiveVar(false)

  Session.setDefault('template', 'home');

  Template.body.helpers({
    currentPage: function(page){
      return Session.get('template')
    }
  })
  }
)

import './main.html';
// import './bookings.js';
