class ComplexDirective {
    /*@ngInject*/
    constructor($q, $interval) {
        this.$q = $q;
        this.$interval = $interval;

        this.replace = true;
        this.restrict = 'AE'; //Properties of DDO have to be attached to the instance through this reference
        this.templateUrl = 'app/common/ComplexView.html';
    }

    link(scope, elem, attrs, ngModelController) {
        elem.css("color", "green");
        elem.css("border", "2px solid red");
    }

    compile(tElement) {
        tElement.css("background-color", "yellow");
    }
}

export default ComplexDirective;
