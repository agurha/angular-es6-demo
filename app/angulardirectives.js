import ng from 'angular';
import register from './utils';
import simpleDirective from './common/SimpleDirective';
import complexDirective from './common/ComplexDirective';

let moduleName = 'Test1App.directives';
let directiveModules = ng.module(moduleName, []);
register(moduleName).directive('simpleDirective', simpleDirective)
register(moduleName).directive('complexDirective', complexDirective);

export default directiveModules;
