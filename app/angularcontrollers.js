import ng from 'angular';
import Test1Controller from './common/Test1Controller';
import Test2Controller from './common/Test2Controller';
import route1Controller from '../components/route1/route1';
import route2Controller from '../components/route2/route2';

const moduleName = 'Test1App.controllers';
let controllerModules = ng.module(moduleName, [])
    .controller('Test1Controller', Test1Controller)
    .controller('Test2Controller', Test2Controller)
    .controller('Route1Controller', route1Controller)
    .controller('Route2Controller', route2Controller);

export default controllerModules;
