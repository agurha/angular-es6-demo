class ComplexDirective {
    /*@ngInject*/
    constructor($log) {
        this.$log = $log;

        //Properties of directive definition object have to be attached to the instance through the this reference
        this.restrict = 'AE';
        this.templateUrl = 'app/common/ComplexDirective/ComplexView.html';
        this.scope = '';
        this.controller = 'Test1Controller';
        this.controllerAs = 'cntrl';
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
        this.$log.debug('ComplexDirective compile completed');
    }
}

export default ComplexDirective;
