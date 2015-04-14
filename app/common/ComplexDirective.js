class ComplexDirective {
    /*@ngInject*/
    constructor($log) {
        this.$log = $log;

        this.replace = true;
        this.restrict = 'AE'; //Properties of DDO have to be attached to the instance through this reference
        this.templateUrl = 'app/common/ComplexView.html';
        this.bindToController = true;
        this.$log.debug('ComplexDirective contructor completed');
    }

    link(scope, elem, attrs) {
        elem.bind('click', () => {
            this.$log.debug('ComplexDirective clicked');
            scope.cntrl.updateClicks();
            scope.$apply();
        });
        this.$log.debug('ComplexDirective link completed');
    }

    compile(tElement) {
        tElement.css("background-color", "yellow");
        this.$log.debug('ComplexDirective complie completed');
    }
}

export default ComplexDirective;
