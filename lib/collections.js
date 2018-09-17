import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

// really need this to be the Model!! and add Meteor methods
export const Bookings = new Mongo.Collection('bookings');

Meteor.methods({

  'bookings.insert'(text) {
    check(text,String)

    // check if logged in
    if(!Meteor.userId()) {
      throw new Meteor.Error("Access-denied:user-not-logged-in")
    }
    console.log("bookings.insert : " + text)
    Bookings.insert( {
      text ,
      createdAt : new Date(),
      userId : Meteor.userId()
    })
  },
  'bookings.remove'(booking) {
    // note _id is an object with a toString method
    // check(note._id,String)
    // if no user allow anyone to delete
    if(note.userId && note.userId !== Meteor.userId()) {
      throw new Meteor.Error("not-authorised","can-only-delete-own-bookings")
    }
    Bookings.remove(booking._id)
  }

})
