"use strict"; // Required for now otherwise the /*ngInject*/ move to the wrong place in compiled functions as browserify aoto placesd üse strict"in functions (ES6 requirement)

/*@ngInject*/
let configFunction = ($logProvider) => {
    console.log('Config executed');
    $logProvider.debugEnabled(true); // Turns global logging with $log.debug on
};

export default configFunction;
