class Test1Controller {
    /*@ngInject*/
    constructor(HelloWorldService) {
        this.dummyProperty = 'Hello from controller via ES6 !';
        this.HelloWorldService = HelloWorldService;
        this.helloWorldProperty = HelloWorldService.greeting();
    }

    helloWorldFunction() {
        return this.HelloWorldService.greeting();
    }
}

export default Test1Controller;
