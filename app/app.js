'use strict';
import ng from 'angular';
import controllers from './angularcontrollers';
import components from './angularcomponents';
import services from './angularservices';
import directives from './angulardirectives';
import configFunction from './config';
import constants from './constants';

const appName = 'Test1App';
let app = ng.module(appName, ['ngNewRouter',
    services.name,
    controllers.name,
    components.name,
    directives.name
]);

app.constant('CONSTANTS', constants);

app.config(configFunction);

/*@ngInject*/
app.run(($log, CONSTANTS) => {
    // Add code that needs a run block to execute here.
    console.debug('Run block executed');
    $log.debug('$log output');
    $log.debug(CONSTANTS.text);
});

export default app;
