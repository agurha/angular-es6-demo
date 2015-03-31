import ng from 'angular';
import Test1Controller from './common/Test1Controller';
import Test2Controller from './common/Test2Controller';

const moduleName = 'Test1App.controllers';
let controllerModules = ng.module(moduleName, [])
    .controller('Test1Controller', Test1Controller)
    .controller('Test2Controller', Test2Controller);

export default controllerModules;
