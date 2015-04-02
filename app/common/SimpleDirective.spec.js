import SimpleDirective from './SimpleDirective';

describe('SimpleDircetive', () => {
    let clz = new SimpleDirective();

    it('should be restricted to AE', () => {
        expect(clz.restrict).toEqual('AE');
    });

    it('should have an empty scope', () => {
        expect(clz.scope).toEqual({});
    });
});
