import ComplexDirective from './ComplexDirective';
import register from '../utils';
import Test1Controller from './Test1Controller';
import HelloWorldService from './HelloWorldService';

describe('ComplexDirective', () => {
    const moduleName = 'ComplexDirective';
    let element, scope, clz;
    let html = '<div complex-directive>Test Div 1</div>';

    angular.module(moduleName, ['templates'])
        .service('HelloWorldService', HelloWorldService)
        .controller('Test1Controller', Test1Controller);;
    register(moduleName).directive('complexDirective', ComplexDirective);

    beforeEach(angular.mock.module(moduleName));
    beforeEach(inject(($rootScope, $compile, $log) => {
        clz = new ComplexDirective($log);
        scope = $rootScope.$new();
        element = $compile(html)(scope);
        scope.$log = $log;
        scope.$apply();
    }));

    it('should be restricted to AE', () => {
        expect(clz.restrict).toEqual('AE');
    });

    it('should have an empty scope', () => {
        expect(clz.scope).toBeUndefined();
    });

    it('should increment click count when clicked', () => {
        let elem = element.find('H2')
        expect(elem.text()).toEqual('No of Clicks = 0');
        $(element).click();
        scope.$apply();
        expect(elem.text()).toEqual('No of Clicks = 1');
    });
});
