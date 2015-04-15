class route2Controller {
    /*@ngInject*/
    constructor() {}

    canActivate() {
        return confirm('Are you sure you want to go to route 2 ?');
    }

    canDeactivate() {
        console.log("route2 canDeactivate");
        return true;
    }

    activate() {
        console.log("route2 activated");
    }

    deactivate() {
        console.log("route2 deactivated");
    }
}

export default route2Controller;
