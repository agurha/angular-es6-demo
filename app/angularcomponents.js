import ng from 'angular';
import route1Controller from './components/route1/Route1Controller';
import route2Controller from './components/route2/Route2Controller';

const moduleName = 'Test1App.components';
let controllerModules = ng.module(moduleName, [])
    .controller('Route1Controller', route1Controller)
    .controller('Route2Controller', route2Controller);

export default controllerModules;
