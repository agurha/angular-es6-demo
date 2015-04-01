class Module1Controller {
    /*@ngInject*/
    constructor($log) {
        this.aProperty = "A Property";
        $log.debug('Module1Controller constructor completed.');
    }

    aFunction() {
        return this.aProperty;
    }
}

export default Module1Controller;
