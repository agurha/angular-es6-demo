import ng from 'angular';
import HelloWorldService from './common/HelloWorldService';

const moduleName = 'Test1App.services';
let servicesModule = ng.module(moduleName, ['ngResource'])
    .service('HelloWorldService', HelloWorldService);

export default servicesModule;
