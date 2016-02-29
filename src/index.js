angular.module('appFilters', []);
angular.module('appDirectives', ['appFiters']);
angular.module('easy-app', ['ui.router', 'ngMask', 'appDirectives', 'appFilters', 'oc.lazyload']);

