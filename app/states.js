"use strict"; // Required for now otherwise the /*ngInject*/ move to the wrong place in compiled functions as browserify aoto placesd üse strict"in functions (ES6 requirement)

/*@ngInject*/
var statesFunction = ($stateProvider, $urlRouterProvider) => {
    console.log('states executing');
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");

    // Now set up the states
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "partials/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "partials/state1.list.html",
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "partials/state2.html"
        });
};

export default statesFunction;
