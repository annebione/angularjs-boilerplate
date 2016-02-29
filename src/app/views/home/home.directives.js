function EaDirective() {
  return {
  	restrict: 'AE', //element type. It could be A for attribute and EA for both
  	template: '<div>
  	             <h1> Welcome to Easy App, {{ name }}</h1>
  	          </div>'
  }

};


angular.module('appDirectives').directive('EaDirective', EaDirective);