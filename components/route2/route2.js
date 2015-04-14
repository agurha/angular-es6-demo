class route2Controller {
    /*@ngInject*/
    constructor() {
    }

    canActivate() {
        return confirm('Are you sure you want to go to route 2 ?');
    }

    canDeactivate() {
        return confirm('Sure you want to leave route 2 ?');
    }

    activate() {
        console.log("route2 activated");
    }

    deactivate() {
        console.log("route2 deactivated");
    }
}

export default route2Controller;
