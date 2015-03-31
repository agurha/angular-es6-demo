class HelloWorldService {
    constructor() {
        this.property1 = "Hello world from ES6 service";
        this.property2 = 100;
    }

    greeting() {
        return this.property1;
    };
}

export default HelloWorldService;
