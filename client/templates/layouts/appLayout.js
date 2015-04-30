/**
 * Created by apple on 13/03/15.
 */

Template.appTabs.helpers({
    isMelamed: function() {
        return (Meteor.userId() === Melamed.id);
    },
    isUser: function(){
        return (Meteor.userId());
    }

});