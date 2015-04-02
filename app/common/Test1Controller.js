class Test1Controller {
    /*@ngInject*/
    constructor(HelloWorldService) {
        this.noOfClicks = 0;
        this.dummyProperty = 'Hello from controller via ES6 !';
        this.HelloWorldService = HelloWorldService;
        this.helloWorldProperty = HelloWorldService.greeting();
    }

    helloWorldFunction() {
        return this.HelloWorldService.greeting();
    }

    updateClicks() {
        this.noOfClicks = this.noOfClicks + 1;
    }
}

export default Test1Controller;
