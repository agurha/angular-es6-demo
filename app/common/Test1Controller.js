class Test1Controller {
    /*@ngInject*/
    constructor(HelloWorldService, $router) {
        // Set injectables to local properties
        this.HelloWorldService = HelloWorldService;
        this.$router = $router;

        // Initialize any other properties
        this.noOfClicks = 0;
        this.dummyProperty = 'Hello from controller via ES6 !';
        this.helloWorldProperty = HelloWorldService.greeting();

        // Call any other initialization functions
        this.configRouter();
    }

    helloWorldFunction() {
        return this.HelloWorldService.greeting();
    }

    updateClicks() {
        this.noOfClicks = this.noOfClicks + 1;
        if (this.noOfClicks > 5) {
            this.$router.navigate('route2');
        }

    }

    configRouter() {
        this.$router.config([{
            path: '/route1',
            component: 'route1'
        }, {
            path: '/route2',
            component: 'route2'
        }]);
    }
}

export default Test1Controller;
