Meteor.publish('users', function(){
    return Meteor.users.find(); //adjust query to return the info you want public
});
