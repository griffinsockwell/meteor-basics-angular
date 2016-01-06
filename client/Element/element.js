angular.module('element-track').controller('ElementCtrl',
  function($scope, $reactive) {
    $reactive(this).attach($scope);

    this.editElement = function() {
      this.editing = !this.editing;
    };

    this.removeElement = function(element) {
      if (confirm("Are you sure you want to delete this element?")) {
        Meteor.call('removeElement', element._id);
      }
    };

    this.updateElement = function(element) {
      Meteor.call('updateElement', element._id, element.atNum, element.elName);

      this.editing = !this.editing;
    };
  }
);
