class SimpleDirective {
    /*@ngInject*/
    constructor($q, $interval) {
        this.$q = $q;
        this.$interval = $interval;

        this.restrict = 'AE'; //Properties of DDO have to be attached to the instance through this reference
        this.templateUrl = 'app/common/SimpleView.html';
        this.scope = {};
    }
}

export default SimpleDirective;
