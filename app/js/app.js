'use strict';

var mySite = 'http://dev-headless-drupal-8.gotpantheon.com/'

// Declare app level module which depends on filters, and services
var headlessDrupal = angular.module('headlessDrupal', [
  'ngRoute',
  'ngResource',
  'ngSanitize']);

headlessDrupal.controller('NodeLoader', function($scope, $resource) {
  var nodeService = $resource(mySite +'node/:nodeId',
    { nodeId: '@nodeId' },
    {
      get: {
        method:'GET',
        transformRequest: function(data, headersGetter) {
                headersGetter()['Accept'] = 'application/hal+json'
        }
      }
    });

  $scope.load = function() {
    if (Number.isInteger($scope.nodeId) && $scope.nodeId > 0) {
      loadNode($scope.nodeId)
    }
  }

  // Initial dummy content for a "node":
  $scope.node = {
    'disclaimer': [{'value': 'This data is bundled into app.js, not loaded from the backend.'}],
    'title': [{'value': 'Headless Drupal + Angular.js'}],
    'body': [{'value': '<p>This demo shows how you can use a dynamic front-end (Angular.js) and a Drupal back-end to power a great user experience. Go ahead and click the number field below to start loading nodes.</p>'}]
  }

  // Load a node helper function.
  function loadNode(nid, callback) {
    var node = nodeService.get({'nodeId': nid}, function() {
      $scope.node = node
      if (typeof callback === "function") {
        // Call it, since we have confirmed it is callable
        callback(nid);
      }
    });
  }
});
