'use strict';
import ng from 'angular';
import controllers from './angularcontrollers';
import services from './angularservices';
import directives from './angulardirectives';
import configFunction from './config';
import constants from './constants';
import statesFunction from './states'

const appName = 'Test1App';
let app = ng.module(appName, ['ngRoute',
     'ui.router',
    services.name,
    controllers.name,
    directives.name
]);

app.constant('CONSTANTS', constants);

app.config(configFunction);
app.config(statesFunction);

/*@ngInject*/
app.run(($log, CONSTANTS) => {
    // Add code that needs a run block to execute here.
    console.debug('Run block executed');
    $log.debug('$log output');
    $log.debug(CONSTANTS.text);
});

export default app;
