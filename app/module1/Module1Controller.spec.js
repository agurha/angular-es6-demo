import Module1Controller from './Module1Controller';

describe('Module1Controller', () => {
    let cntrl;
    angular.module('testControllers', [])
        .controller('Module1Controller', Module1Controller);

    beforeEach(angular.mock.module('testControllers'));
    beforeEach(inject(($controller, $log) => {
        let $scope = {};
        cntrl = $controller('Module1Controller', {
            $scope: $scope,
            $log: $log
        });
    }));

    it('should have a property aProperty', () => {
        expect(cntrl.aProperty).toBeDefined();
        expect(cntrl.aFunction()).toEqual("A Property");
    });
});
