import Test1Controller from './Test1Controller';
import HelloWorldService from './HelloWorldService';

describe('Test1Controller', () => {
    const moduleName = 'Test1Controller';
    let cntrl;
    let helloWorldServiceObj = new HelloWorldService();

    let mod = angular.module(moduleName, ['ngNewRouter'])
        .controller('Test1Controller', Test1Controller);

    beforeEach(angular.mock.module(moduleName));

    beforeEach(inject(($controller) => {
        spyOn(helloWorldServiceObj, 'greeting').and.returnValue('mocked 1');
        let $scope = {};
        cntrl = $controller(Test1Controller, {
            "$scope": $scope,
            "HelloWorldService": helloWorldServiceObj
        });
    }));

    it('should have a property dummyProperty', () => {
        expect(cntrl.dummyProperty).toEqual('Hello from controller via ES6 !');
    });

    it('should call service', () => {
        expect(cntrl.helloWorldFunction()).toEqual('mocked 1');
        expect(helloWorldServiceObj.greeting).toHaveBeenCalled();
    });

});
