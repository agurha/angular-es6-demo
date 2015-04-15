class Test1Controller {
    /*@ngInject*/
    constructor(HelloWorldService, $router) {
        this.HelloWorldService = HelloWorldService;
        this.$router = $router;

        this.noOfClicks = 0;
        this.dummyProperty = 'Hello from controller via ES6 !';
        this.helloWorldProperty = HelloWorldService.greeting();

        this.configRouter();
    }

    helloWorldFunction() {
        return this.HelloWorldService.greeting();
    }

    updateClicks() {
        this.noOfClicks = this.noOfClicks + 1;
        if (this.noOfClicks > 5) {
            this.$router.navigate('route1');
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
