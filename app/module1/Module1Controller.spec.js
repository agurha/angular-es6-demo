import Module1Controller from './Module1Controller';

describe('Module1Controller', () => {
    const moduleName = 'Module1Controller';
    let cntrl;
    angular.module(moduleName, [])
        .controller('Module1Controller', Module1Controller);

    beforeEach(angular.mock.module(moduleName));
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
