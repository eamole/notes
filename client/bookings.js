import {Template} from "meteor/templating";
import {Bookings} from "../lib/collections";

import './bookings.html';

Template.bookingsList.helpers({
  bookings : function () {
    // return all notes - sort by date DESC
    console.log("Return all bookings")
    return Bookings.find({},{sort: {createdAt: -1}});
  }
})

Template.bookingAdd.events({
  'submit .add-form': function (event) {
    event.preventDefault;
    const target = event.target     // the form
    const text = target.text.value  // text is name of field

    // call Metaor method - which has priveleges
    Meteor.call('bookings.insert', text)
    // reset thge form field
    target.text.value = "";
    $("#bookingAdd").modal("close")

    return false;
  }

})

Template.booking.events({
  "click .delete": function () {
    console.log("delete " + this._id)
    Meteor.call('bookings.remove', this)    // note object is this
    return false;
  }


})

Template.booking.helpers({})

Template.bookingsTabs.onRendered(function () {
  $("#bookingsTabs").tabs();
});
