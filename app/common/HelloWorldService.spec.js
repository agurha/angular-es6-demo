import HelloWorldService from './HelloWorldService';

describe('HelloWorldServicer', () => {
    let service;

    angular.module('testServices', [])
        .service('HelloWorldService', HelloWorldService);

    beforeEach(angular.mock.module('testServices'));
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
