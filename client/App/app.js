angular.module('element-track', ['angular-meteor']);

angular.module('element-track').controller('AppCtrl', function($scope, $reactive) {
  $reactive(this).attach($scope);

  this.subscribe('elements');

  this.helpers({
    elements() {
      return Elements.find({}, {
        sort: {
          atNum: 1
        }
      });
    },
    hasElements() {
      return Boolean(Elements.find().count());
    }
  });

  this.addElement = (newEl) => {
    Meteor.call('addElement', newEl.atNum, newEl.elName);
  };

});
