class Test1Controller {
    /*@ngInject*/
    constructor(HelloWorldService, $router) {
        this.noOfClicks = 0;
        this.dummyProperty = 'Hello from controller via ES6 !';
        this.HelloWorldService = HelloWorldService;
        this.helloWorldProperty = HelloWorldService.greeting();
        this.configRouter($router);
    }

    helloWorldFunction() {
        return this.HelloWorldService.greeting();
    }

    updateClicks() {
        this.noOfClicks = this.noOfClicks + 1;
    }

    configRouter($router) {
        $router.config([{
            path: '/route1',
            component: 'route1'
        }, {
            path: '/route2',
            component: 'route2'
        }]);
    }
}

export default Test1Controller;
