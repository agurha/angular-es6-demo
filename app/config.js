"use strict"; // Required for now otherwise the /*ngInject*/ move to the wrong place in transpiled functions as browserify auto places "use strict" in functions (ES6 requirement)

function dashCase(str) {
    return str.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
    });
}

/*@ngInject*/
let configFunction = ($logProvider, $componentLoaderProvider) => {
    console.log('Config executed');
    $logProvider.debugEnabled(true); // Turns global logging with $log.debug on

    // Setup newRouter so that it looks for components in ./app/components rather than ./components
    $componentLoaderProvider.setTemplateMapping(function (name) {
        var dashName = dashCase(name);
        // customized to use app prefix
        return './app/components/' + dashName + '/' + dashName + '.html';
    });
};

export default configFunction;
