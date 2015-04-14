"use strict"; // Required for now otherwise the /*ngInject*/ move to the wrong place in transpiled functions as browserify auto places "use strict" in functions (ES6 requirement)

/*@ngInject*/
let configFunction = ($logProvider) => {
    console.log('Config executed');
    $logProvider.debugEnabled(true); // Turns global logging with $log.debug on
};

export default configFunction;
