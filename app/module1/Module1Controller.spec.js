import Module1Controller from './Module1Controller';

describe('Module1Controller', function () {
    angular.module('testControllers', [])
        .controller('Module1Controller', Module1Controller);

    beforeEach(angular.mock.module('testControllers'));

    it('should have a property aProperty', inject(function ($controller, $log) {
        let $scope = {};
        let cntrl = $controller('Module1Controller', {
            $scope: $scope,
            $log: $log
        });
        expect(cntrl.aProperty).toBeDefined();
        expect(cntrl.aFunction()).toEqual("A Property");
    }));
});
