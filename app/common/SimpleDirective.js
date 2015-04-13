class SimpleDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = 'AE'; //Properties of DDO have to be attached to the instance through this reference
        this.templateUrl = 'app/common/SimpleView.html';
        this.scope = {};
        this.bindToController = true;
    }
}

export default SimpleDirective;
