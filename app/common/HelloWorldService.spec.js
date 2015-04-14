import HelloWorldService from './HelloWorldService';

describe('HelloWorldService', () => {
    const moduleName = 'HelloWorldService';
    let service;

    angular.module(moduleName, [])
        .service('HelloWorldService', HelloWorldService);

    beforeEach(angular.mock.module(moduleName));
    beforeEach(inject((_HelloWorldService_) => {
        service = _HelloWorldService_;
    }));

    it('should have a property property2 = 100', () => {
        expect(service.property2).toEqual(100);
    });

    it('should have a function greeting', () => {
        expect(service.greeting()).toEqual("Hello world from ES6 service");
    });
});
