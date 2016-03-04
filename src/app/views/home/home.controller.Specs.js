require('require-dir')('home.controller.js')


describe('HomeCtrl', function() {
	beforeEach(module('easy-app'));

describe('getFullName', function() {
	it('Should return the users full username', inject(function($controller) {
		var myController = $controller('HomeCtrl');

        myController.firstName = "Anne";
        myController.lastName = "Bione";

        myController.getFullName().should.equal("Anne Bione"));


   }));

  });

});