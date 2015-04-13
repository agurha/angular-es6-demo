import ComplexDirective from './ComplexDirective';
import register from '../utils';
import Test1Controller from './Test1Controller';
import HelloWorldService from './HelloWorldService';

describe('ComplexDircetive', () => {
    const moduleName = 'testDirectives';
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
        scope.$digest();
    }));

    it('should be restricted to AE', () => {
        expect(clz.restrict).toEqual('AE');
    });

    it('should have an empty scope', () => {
        expect(clz.scope).toBeUndefined();
    });

    it('should increment click count when clicked', () => {
        console.log(element);
        let elem = element.find('H2')
        console.log(elem.text());
        expect(elem.text()).toEqual('No of Clicks = 0');
        compiled.click();
        scope.$apply();
        console.log(elem.text());
        expect(elem.text()).toEqual('No of Clicks = 1');
    });
});
